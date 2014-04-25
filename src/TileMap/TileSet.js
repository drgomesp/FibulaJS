/*
 * This file is part of the Fibula package.
 *
 * (c) Daniel Ribeiro <drgomesp@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * Creates a new TileSet object.
 * 
 * @class Fibula.TileSet
 * @constructor
 * @param {HTMLImageElement} image The image of the tile set.
 * @param {number} tileWidth The width of the tile.
 * @param {number} tileHeight The height of the tile.
 */
Fibula.TileSet = function(image, tileWidth, tileHeight)
{
    /**
     * The image to be used on the tile set.
     * @type {HTMLImageElement}
     */
    this.image = image;

    /**
     * The width of the tile. 
     * @type {number}
     */
    this.tileWidth = tileWidth;

    /**
     * The height of the tile.
     * @type {number}
     */
    this.tileHeight = tileHeight;

    /**
     * The width of the tile set.
     * @type {number}
     */
    this.width = image.width;

    /**
     * The height of the tile set.
     * @type {number}
     */
    this.height = image.height;
};

Fibula.TileSet.prototype.constructor = Fibula.TileSet;
