const formatUpdateQuery = (obj, query, id) => {
    const columnKeys = Object.keys(obj);
    let updateQuery = query;
    for (let i = 0; i < columnKeys.length; i += 1) {
        updateQuery += ` ${columnKeys[i]}=($${i + 1})${i + 1 !== columnKeys.length ? "," : ""}`;
    }

    updateQuery = updateQuery += `WHERE id = ${id}`;

    return updateQuery
}

module.exports = formatUpdateQuery;
