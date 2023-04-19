categoryBox = document.getElementById('links-body');
category = document.getElementById('links').addEventListener('click',showoptions);
covering = document.getElementById('cov').addEventListener('click',covered);

function showoptions () {
    categoryBox.style.display = 'block';
    covering.style.display = 'block';
}
function covered () {
    categoryBox.style.display = 'none';
    covering.style.display = 'none';
}