const assert = require('assert')
const Pyramid = require('./Pyramid2')


describe("pyramid tests", function(){
    it.only("handles current node", function(){
        const pyramidArr = [[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]
        const pyramid = new Pyramid(pyramidArr)
        const res = pyramid.handleCurrentNode()
        console.log(res)
        // correct
        assert(res.join() === [8, 2, 7, 3 ].join())
        // incorrect
        assert(res.join() !== [3,7,2,8].join())

    })
    it("checks to the upper left", function(){
        const pyramidArr = [[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]
        const pyramid1 = new Pyramid(pyramidArr)
        const res1 = pyramid1.returnLeft(0,1)
        assert(res1 === 2)
        assert(res1 !== 8)
        const res2 = pyramid1.returnLeft(3,0)
        // console.log('Res', reslsls2)
        assert(res2 === undefined)
    })
    it("checks above", function(){
        const pyramidArr = [[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]
        const pyramid2 = new Pyramid(pyramidArr)
        const res1 = pyramid2.returnAbove(0,2)
        assert(res1 === 6)
        assert(res1 !== 2)
        const res2 = pyramid2.returnAbove(0,3)
        assert(res2 === undefined)

    })
    it("checks to the right", function(){
        const pyramidArr = [[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]
        const pyramid3 = new Pyramid(pyramidArr)
        const res1 = pyramid3.returnRight(1,0)
        assert(res1 === 4)
        assert(res1 !== 7)
        const res2 = pyramid3.returnRight(1,1)
        assert(res2 === undefined)

    })
})
