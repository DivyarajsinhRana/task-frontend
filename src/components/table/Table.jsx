
const TableV2 = ({
    tableheading,
    tabledata,
}) => {
    return (
        <div>
            <table cellSpacing={0}>
                <thead>
                    <tr>
                        {tableheading &&
                            tableheading.map((item, index) => (
                                <TableHead
                                    item={item}
                                    key={index}
                                />
                            ))}
                    </tr>
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
            </table>
        </div>
    );
};
export default TableV2;
export const TableHead = ({ item }) => {
    return (
        <>
            <th>
                {item.label}
            </th>
        </>
    );
};

export const TableRow = ({
    item,
    tableheading,
}) => {
    return (
        <>
            <tr>
                {tableheading.map((thItem, index) => {
                    return (
                        <td key={index}>
                            {
                                item[thItem.value]
                            }
                        </td>
                    );
                })}
            </tr>
        </>
    );
};
