import StyledTd from "../stylescomponents/table/StyledTd";
import StyledTh from "../stylescomponents/table/StyledTh";
import StyledTable from "../stylescomponents/table/Table";
import TableBodyRow from "../stylescomponents/table/tableBodyRow";
import TableHeadRow from "../stylescomponents/table/tableHeadRow";
import TableWrapper from "../stylescomponents/table/tablewrapper/TableWrapper";

const Table = ({
    tableheading,
    tabledata,
}) => {
    return (
        <TableWrapper>
            <StyledTable cellSpacing={0}>
                <thead>
                    <TableHeadRow>
                        {tableheading &&
                            tableheading.map((item, index) => (
                                <TableHead
                                    item={item}
                                    key={index}
                                />
                            ))}
                    </TableHeadRow>
                </thead>
                <tbody>
                    {tabledata &&
                        tabledata.map((item, index) => (
                            <TableRow
                                item={item}
                                tableheading={tableheading}
                                key={index}
                            />
                        ))}
                </tbody>
            </StyledTable>
        </TableWrapper>
    );
};
export default Table;
export const TableHead = ({ item }) => {
    return (
        <>
            <StyledTh>
                {item.label}
            </StyledTh>
        </>
    );
};

export const TableRow = ({
    item,
    tableheading,
}) => {
    return (
        <>
            <TableBodyRow>
                {tableheading.map((thItem, index) => {
                    return (
                        <StyledTd key={index}>
                            {
                                item[thItem.value]
                            }
                        </StyledTd>
                    );
                })}
            </TableBodyRow>
        </>
    );
};
