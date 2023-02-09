function toggle(clicked_id) {
    var checkBox = document.getElementById(clicked_id); 
    var famId = new String(clicked_id+"s");
    var div = document.getElementById(famId);
    if (checkBox.checked == true) {
        div.style.display = 'block';
        div.style.zIndex = '3';
    }
    else {
        div.style.display = 'none';
        div.style.zIndex = '1';
    }
};