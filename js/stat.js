'use strict';

var CLOUD_WIDTH  = 420,
    CLOUD_HEIGHT = 270,
    CLOUD_POS_X  = 100,
    CLOUD_POS_Y  = 10,
    SHADOW_GAP   = 10;

var SCORE_COL_HEIGHT = 130,
    SCORE_COL_WIDTH  = 40,
    SCORE_COL_OFFSET = 50,
    SCORE_COL_BASELINE = 240;


var renderCloud = function(ctx, x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxTime = function(array) {
    var max = Math.max.apply(null, array);
    return Math.round(max);
};

var getColHeight = function(maxtime, time) {
    return Math.round(time / (maxtime / 100) * (SCORE_COL_HEIGHT / 100));
};

var getColY = function(height) {
    return SCORE_COL_BASELINE - height;
};

var getColor = function(name) {
    var color,
        hue;

    if (name === 'Вы') {
        color = 'rgba(255, 0, 0, 1)'
    } else {
        hue = Math.floor(Math.random() * (256 - 1)) + 1;
        color = 'rgba(0, 0, ' + hue + ', 1)';
    }
    return color;
};


window.renderStatistics = function(ctx, names, times) {

    renderCloud( ctx, CLOUD_POS_X + SHADOW_GAP, CLOUD_POS_Y + SHADOW_GAP, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, .7)' );
    renderCloud( ctx, CLOUD_POS_X, CLOUD_POS_Y, CLOUD_WIDTH, CLOUD_HEIGHT, 'white' );

    ctx.fillStyle = 'black';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 150, 40);
    ctx.fillText('Список результатов:', 150, 60);

    var maxTime = getMaxTime(times);

    for ( var i = 0; i < names.length; i++ ) {

        var time = Math.round(times[i]);
        var colHeight = getColHeight(maxTime, time);
        var colX = 150 + (SCORE_COL_WIDTH + SCORE_COL_OFFSET) * i;
        var colY = getColY(colHeight);
        var color = getColor(names[i]);
        var timeY = colY - 20;


        ctx.fillStyle = 'black';
        ctx.fillText(time, colX, colY - 10);

        ctx.fillStyle = color;
        ctx.fillRect(colX, colY, SCORE_COL_WIDTH, colHeight);

        ctx.fillStyle = 'black';
        ctx.fillText(names[i], colX, SCORE_COL_BASELINE + 20);
    }
}
