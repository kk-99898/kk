const imageArr = ['lb1','lb2','lb3','lb4','lb5','lb6']
const imgs = imageArr.map(item => require('../../../img/main/' + item + '.png'))

const list = {
    item:{
        id:'0',
        lb1:{
            img: imgs[0],
        }
    },
    item1:[
    {   
        id:'1',
        lb1:{
            img: imgs[1],
        }
    },
    {   
        id:'2',
        lb1:{
            img: imgs[2],
        }
    },
    {   
        id:'3',
        lb1:{
            img: imgs[3],
        }
    },
    {   
        id:'4',
        lb1:{
            img: imgs[4],
        }
    },
    {   
        id:'5',
        lb1:{
            img: imgs[5],
        }
    }
]
}

export default list