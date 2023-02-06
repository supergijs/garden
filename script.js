function toggle(clicked_id) {
    var checkBox = document.getElementById(clicked_id); 
    var famId = new String(clicked_id+"s");
    var div = document.getElementById(famId);
    if (checkBox.checked == true) {
        div.style.display = 'block';
    }
    else {
        div.style.display = 'none';
    }
};