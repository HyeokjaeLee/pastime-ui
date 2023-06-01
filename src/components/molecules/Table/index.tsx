import { isNumber } from 'lodash-es';

import {
  useRef,
  useContext,
  useMemo,
  useState,
  useEffect,
  createContext,
  Children,
} from 'react';
import type { ReactNode, Dispatch, SetStateAction } from 'react';

import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';

interface TitleData {
  order: {
    origin: number;
    current: number;
  };
  width?: number;
}

interface TableState {
  titles: TitleData[];
  draggingOrder?: number;
  dropOrder?: number;
  hoveredOrder?: number;
}

interface TableContextValue {
  tableState: TableState;
  setTableState: Dispatch<SetStateAction<TableState>>;
  fixedTitleCount: number;
  isLeftScrolled: boolean;
}

const TableContext = createContext<TableContextValue>({
  tableState: {
    titles: [],
  },
  setTableState: () => undefined,
  fixedTitleCount: 0,
  isLeftScrolled: false,
});

interface CommonProps {
  className?: string;
  children?: ReactNode;
}

export interface TableProps extends CommonProps {
  fixedTitleCount: number;
}

const TableMain = ({ className, children, fixedTitleCount }: TableProps) => {
  const [tableState, setTableState] = useState<TableState>({
    titles: [],
  });
  const [isLeftScrolled, setIsLeftScrolled] = useState(false);

  const tableContextValue: TableContextValue = useMemo(
    () => ({
      tableState,
      setTableState,
      fixedTitleCount,
      isLeftScrolled,
    }),
    [fixedTitleCount, tableState, isLeftScrolled],
  );

  return (
    <article
      className={cleanClassName(`${styles.table} ${className}`)}
      onScroll={(e) => setIsLeftScrolled(e.currentTarget.scrollLeft > 0)}
    >
      <table>
        <TableContext.Provider value={tableContextValue}>
          {children}
        </TableContext.Provider>
      </table>
    </article>
  );
};

export type TableHeaderProps = CommonProps;

const TableHeader = ({ children, className }: TableHeaderProps) => {
  const titleCount = Children.count(children);
  const {
    setTableState,
    tableState: { titles },
  } = useContext(TableContext);
  useEffect(() => {
    setTableState((prevState) => ({
      ...prevState,
      titles: Array.from(
        {
          length: titleCount,
        },
        (_, index) => ({
          order: {
            origin: index,
            current: index,
          },
        }),
      ),
    }));
  }, [titleCount, setTableState]);

  const childrenArray = Children.toArray(children);

  return (
    <thead className={cleanClassName(`${styles.header} ${className}`)}>
      <tr>{titles.map(({ order: { origin } }) => childrenArray[origin])}</tr>
    </thead>
  );
};

export interface TableTitleProps extends CommonProps {
  width?: React.CSSProperties['width'];
}

const TableTitle = ({ children, width, className }: TableTitleProps) => {
  const { tableState, setTableState, fixedTitleCount, isLeftScrolled } =
    useContext(TableContext);

  const { titles } = tableState;

  const ref = useRef<HTMLTableCellElement>(null);

  useEffect(() => {
    const { current: element } = ref;
    if (element) {
      const { offsetWidth, cellIndex } = element;
      setTableState((prevState) => {
        prevState.titles[cellIndex].width = offsetWidth;

        return { ...prevState };
      });
    }
  }, [ref, setTableState, width]);

  const currentOrder = ref.current?.cellIndex ?? -1;

  const { draggingOrder, hoveredOrder, dropOrder } = tableState;

  const setHoveredOrder = (hoveredOrder?: number) => {
    if (draggingOrder === undefined) {
      setTableState((prevState) => ({
        ...prevState,
        hoveredOrder,
      }));
    }
  };

  const handleDrop = () => {
    if (isNumber(draggingOrder) && currentOrder >= 0) {
      let sortedTitles = [...titles];

      const [draggingTitle] = sortedTitles.splice(draggingOrder, 1);

      sortedTitles = sortedTitles.sort(
        (a, b) => a.order.current - b.order.current,
      );

      const { order } = titles[currentOrder];

      sortedTitles = [
        ...sortedTitles.slice(0, order.current),
        draggingTitle,
        ...sortedTitles.slice(order.current),
      ];

      sortedTitles.forEach((title, newOrder) => {
        title.order.current = newOrder;
      });

      const newTableState = {
        ...tableState,
        titles: sortedTitles,
        dropOrder: undefined,
        draggingOrder: undefined,
        hoveredOrder: undefined,
      };

      setTableState(newTableState);

      setTimeout(() =>
        setTableState({
          ...newTableState,
          hoveredOrder: currentOrder,
        }),
      );
    }
  };

  let left = 0;
  for (let i = 0; i < currentOrder; i += 1) left += titles[i]?.width ?? 0;

  const isDropTarget = dropOrder === currentOrder;
  const isDragging = draggingOrder === currentOrder;
  const isFixed = currentOrder < fixedTitleCount;
  const isLastFixed = currentOrder === fixedTitleCount - 1;
  const isHovered = hoveredOrder === currentOrder;
  return (
    <th
      style={{
        left,
        width,
      }}
      className={cleanClassName(
        `${styles.title} ${isFixed && styles.fixed} ${
          isLastFixed && isLeftScrolled && styles.shadow
        } ${isHovered && styles.hovered} ${
          isDropTarget &&
          (isDragging ||
            ((draggingOrder ?? 0) > dropOrder
              ? styles['drop-left']
              : styles['drop-right']))
        } ${isDragging && (isDropTarget ? styles.restoring : styles.dragging)} 

        } ${
          isDragging && (isDropTarget ? styles.restoring : styles.dragging)
        } ${className}`,
      )}
      ref={ref}
      draggable
      onMouseEnter={() => setHoveredOrder(currentOrder)}
      onMouseLeave={() => setHoveredOrder()}
      onDragOver={(e) => e.preventDefault()}
      onDragStart={() =>
        setTableState((prevState) => ({
          ...prevState,
          draggingOrder: currentOrder,
        }))
      }
      onDragEnter={() =>
        setTableState((prevState) => ({
          ...prevState,
          dropOrder: currentOrder,
        }))
      }
      onDrop={handleDrop}
    >
      <div className={styles['title-content']}>{children}</div>
    </th>
  );
};

export type TableBodyProps = CommonProps;

const TableBody = ({ children, className }: TableBodyProps) => (
  <tbody className={className}>{children}</tbody>
);

export type TableRowProps = CommonProps;

const TableRow = ({ children, className }: TableRowProps) => {
  const {
    tableState: { titles },
  } = useContext(TableContext);

  const childrenArray = Children.toArray(children);

  return (
    <tr className={cleanClassName(`${styles.row} ${className}`)}>
      {titles.map(({ order: { origin } }) => childrenArray[origin])}
    </tr>
  );
};

export type TableCellProps = CommonProps;

const TableCell = ({ children, className }: TableCellProps) => {
  const {
    tableState: { titles, hoveredOrder, draggingOrder, dropOrder },
    fixedTitleCount,
    isLeftScrolled,
    setTableState,
  } = useContext(TableContext);

  const ref = useRef<HTMLTableCellElement>(null);
  const currentOrder = ref.current?.cellIndex ?? -1;

  const { width } = titles[currentOrder ?? 0] ?? {};
  let left = 0;
  for (let i = 0; i < currentOrder; i += 1) left += titles[i]?.width ?? 0;

  const [isHovered, setIsHovered] = useState(false);

  const isDropTarget = dropOrder === currentOrder;
  const isDragging = draggingOrder === currentOrder;
  const isFixed = currentOrder < fixedTitleCount;
  const isLastFixed = currentOrder === fixedTitleCount - 1;
  const isTitleHovered = hoveredOrder === currentOrder;

  useEffect(
    () => setTableState((tableState) => ({ ...tableState })),
    [children, setTableState],
  );

  return (
    <td
      ref={ref}
      style={{
        left,
      }}
      className={cleanClassName(
        `${styles.cell} ${isFixed && styles.fixed} ${
          isLastFixed && isLeftScrolled && styles.shadow
        } ${isTitleHovered && styles.hovered} ${
          isDropTarget &&
          (isDragging ||
            ((draggingOrder ?? 0) > dropOrder
              ? styles['drop-left']
              : styles['drop-right']))
        } ${
          isDragging && (isDropTarget ? styles.restoring : styles.dragging)
        } ${className}`,
      )}
    >
      {width === undefined ? null : (
        <div
          style={{
            width,
          }}
          className={styles['cell-content-container']}
          onMouseEnter={({ currentTarget }) => {
            if (currentTarget.scrollWidth > currentTarget.clientWidth)
              setIsHovered(true);
          }}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? (
            <div className={styles.hidden}>{children}</div>
          ) : (
            children
          )}
          {isHovered ? (
            <div className={styles['hovered-cell-content']}>{children}</div>
          ) : null}
        </div>
      )}
    </td>
  );
};

export const Table = Object.assign(TableMain, {
  Header: TableHeader,
  Title: TableTitle,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
});
