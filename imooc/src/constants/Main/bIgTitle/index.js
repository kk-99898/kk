
const imageArr = ['zcjj1', 'zcjj2', 'zcjj3', 'xshk1', 'xshk2', 'xshk4', 'xshk5', 'xshk7', 'xshk8']
const images = imageArr.map(item => require('../../../img/main/Title/' + item + '.png'))
const list = [
    {
        jiuyeban: {
            title: '就业班',
            subTitle: '零基础快速就业',
        },
        zhiyejinjie: {
            title: '职场进阶',
            subTitle: '1年以上开发经验系统成长',
        },
        xinshanghaoke: {
            title: '新上好课',
        },
        item1: [
            {
                id: '0',
                lb1: {
                    img: images[1],
                }
            },
            {
                id: '1',
                lb1: {
                    img: images[0],
                }
            },
            {
                id: '2',
                lb1: {
                    img: images[2],
                }
            },
        ],

    }
]

export default list