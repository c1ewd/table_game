//
// Создание матрицы.
//
function createTable()
{
	var table = document.getElementById('table');
	var n = 20 * 20;	
	
	for (var i = 0; i < n; i++)
	{
		var div = document.createElement('div');
		div.className = 'cell';
		matrix.appendChild(div);
	}
}

//
// Чтение ячейки матрицы.
//
function getCell(row, col)
{
	// Функция принимает координаты ячейки
	// должна вернуть true, если она закрашена,
	// false, если не закрашена.
}

//
// Установка ячейки матрицы.
//
function setCell(row, col, val)
{

	// Функция принимает координаты ячейки
	// если val == true, закрашивает ячейку,
	// иначе убирает закраску.
}

//
// Точка входа.
//
window.onload = function()
{
	createTable();	
	setCell(1, 1, true);

}				
