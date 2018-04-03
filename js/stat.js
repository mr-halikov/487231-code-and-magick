'use strict';

var CLOUD_WIDTH  = 420,
    CLOUD_HEIGHT = 270,
    CLOUD_POS_X  = 100,
    CLOUD_POS_Y  = 10,
    SHADOW_GAP   = 10;

var SCORE_HEIGHT = 150,
    SCORE_WIDTH  = 40,
    SCORE_OFFSET = 50,
    SCORE_BASELINE = 0;


var renderCloud = function(ctx, x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};


window.renderStatistics = function(ctx, names, times) {

    renderCloud( ctx, CLOUD_POS_X + SHADOW_GAP, CLOUD_POS_Y + SHADOW_GAP, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, .7)' );
    renderCloud( ctx, CLOUD_POS_X, CLOUD_POS_Y, CLOUD_WIDTH, CLOUD_HEIGHT, 'white' );

    ctx.fillStyle = 'black';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 150, 50);
    ctx.fillText('Список результатов:', 150, 70);

    for ( var i = 0; i < names.length; i++ ) {
        var col_baseline

    }
}


// Высота гистограммы 150px.
// Ширина колонки 40px.
// Расстояние между колонками 50px.
// Цвет колонки игрока Выrgba(255, 0, 0, 1).
// Цвет колонок других игроков — синий, а насыщенность задаётся случайным образом.
