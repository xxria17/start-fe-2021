// 최신순 정렬
function sortTable() {
    var $table = document.getElementById("class_table");
    var rows;
    var switching = true;
    var shouldSwitch;

    while (switching) {
        var i;
        switching = false;
        rows = $table.rows;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;

            var cell1 = rows[i].getElementsByTagName("td")[3];
            var cell2 = rows[i+1].getElementsByTagName("td")[3];

            if (cell1.innerHTML < cell2.innerHTML) {
                shouldSwitch = true;
                break;
            }
            
        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
            switching = true;
        }
    }
}

export default {sortTable};