import kc3 from '../../../img/main/course/kc3.png'
import kc5 from '../../../img/main/course/kc5.png'
import kc7 from '../../../img/main/course/kc7.png'
import kc12 from '../../../img/main/course/kc12.png'
import kc13 from '../../../img/main/course/kc13.png'
const imageArr = ['kc1', 'kc2', 'kc3', 'kc4', 'kc5', 'kc6', 'kc7', 'kc8', 'kc9', 'kc10', 'kc11', 'kc12', 'kc13', 'kc14', 'kc15', 'kc16', 'kc17', 'kc18', 'kc19']
const imgs = imageArr.map(item => require('../../../img/main/course/' + item + '.jpg'))
const list = [
    {
        id: 'a',
        group: '前沿 / 区块链 / 人工智能',
        content:
        {
            id: 'a',
            title: ['前沿技术', ''],
            tag1: ['微服务', '区块链', '以太坊', '机器学习', '深度学习', '计算机视觉', '数据分析&挖掘'],
            bottom_content: [
                {
                    img: imgs[0],
                    bottom_title: 'Spring Boot仿抖音短视频小程序开发 全栈式实战项目',
                    name: 'Spring Boot仿抖音短视频小程序开发 全栈式实战项目',
                    price: '￥348.00',
                    info: '中级',
                    number: '1700',
                },
                {
                    img: imgs[1],
                    bottom_title: 'Angular8开发拼多多webapp 从基础到项目实战',
                    name: 'Angular8开发拼多多webapp 从基础到项目实战',
                    price: '￥199.00',
                    info: '中级',
                    number: '456',
                },
                {
                    img: [kc3],
                    bottom_title: '微信小程序云开发-从0打造云音乐全栈小程序',
                    name: '微信小程序云开发-从0打造云音乐全栈小程序',
                    price: '￥348.00',
                    info: '中级',
                    number: '404',
                },
                {
                    img: imgs[2],
                    bottom_title: 'vuex基础入门',
                    name: 'vuex基础入门',
                    price: '',
                    info: '中级',
                    number: '13715'
                },
            ]
        },

    },
    {
        id: 'b',
        group: '前端 / 小程序 / JS',
        content:
        {
            id: 'b',
            title: ['前端开发', ''],
            tag1: ['HTML/CSS', 'JavaScript', 'Vue.js', 'React.JS', 'Angular', 'Node.js', 'jQuery', 'Bootstrap', 'Sass/Less', 'WebApp', '小程序', '前端工具', 'CSS', 'Html5', 'CSS3',],
            bottom_content: [
                {
                    img: imgs[3],
                    bottom_title: 'Java 零基础入门',
                    name: 'Java 零基础入门',
                    price: '￥568.00',
                    info: '3步／28课',
                    number: '1988',
                },
                {
                    img: imgs[4],
                    bottom_title: '阿里新零售数据库设计与实战',
                    name: '阿里新零售数据库设计与实战',
                    price: '￥288.00',
                    info: '初级',
                    number: '769',
                },
                {
                    img: [kc5],
                    bottom_title: '基于Spring Cloud微服务架构  广告系统设计与实现',
                    name: '基于Spring Cloud微服务架构  广告系统设计与实现',
                    price: '￥299.00',
                    info: '中级',
                    number: '1073',
                },
                {
                    img: imgs[5],
                    bottom_title: 'MyBatis-Plus进阶',
                    name: 'MyBatis-Plus进阶',
                    price: '',
                    info: '高级',
                    number: '4573',
                },
            ]
        },

    },
    {
        id: 'c',
        group: '后端 / JAVA / Python',
        content:
        {
            id: 'c',
            title: ['后端开发', ''],
            tag1: ['Java', 'SpringBoot', 'Spring Cloud', 'Python', '爬虫', 'Django', 'Tornado', 'Go', 'PHP', 'C', 'C++', 'C#', 'Ruby',],
            bottom_content: [
                {
                    img: imgs[6],
                    bottom_title: 'Android 零基础入门',
                    name: 'Android 零基础入门',
                    price: '￥699.00',
                    info: '5步／40课',
                    number: '645',
                },
                {
                    img: [kc7],
                    bottom_title: '企业级Android应用架构设计与开发',
                    name: '企业级Android应用架构设计与开发',
                    price: '￥288.00',
                    info: '中级',
                    number: '370',
                },
                {
                    img: imgs[7],
                    bottom_title: '大厂资深面试官 带你破解Android高级面试',
                    name: '大厂资深面试官 带你破解Android高级面试',
                    price: '￥299.00',
                    info: '高级',
                    number: '611',
                },
                {
                    img: imgs[8],
                    bottom_title: '新版React Native从入门到实战打造高质量上线App（再升级）',
                    name: 'MyBatis-Plus进阶',
                    price: '￥399.00',
                    info: '中级',
                    number: '1273',
                },
            ]
        },

    },
    {
        id: 'd',
        group: '移动 / Android / iOS',
        content:
        {
            id: 'd',
            title: ['移动开发', ''],
            tag1: ['Android', 'iOS', 'React native', 'WEEX',],
            bottom_content: [
                {
                    img: imgs[6],
                    bottom_title: 'Android 零基础入门',
                    name: 'Android 零基础入门',
                    price: '￥699.00',
                    info: '5步／40课',
                    number: '645',
                },
                {
                    img: imgs[4],
                    bottom_title: '阿里新零售数据库设计与实战 ',
                    name: '阿里新零售数据库设计与实战 ',
                    price: '￥288.00',
                    info: '初级',
                    number: '370',
                },
                {
                    img: imgs[9],
                    bottom_title: '聚焦Java性能优化 打造亿级流量秒杀系统（附赠秒杀项目',
                    name: '聚焦Java性能优化 打造亿级流量秒杀系统（附赠秒杀项目）',
                    price: '￥366.00',
                    info: '高级',
                    number: '692',
                },
                {
                    img: imgs[10],
                    bottom_title: '玩转MongoDB4.0(最新版) 从入门到实践',
                    name: '玩转MongoDB4.0(最新版) 从入门到实践',
                    price: '￥288.00',
                    info: '入门',
                    number: '451',
                },
            ]
        },

    },
    {
        id: 'e',
        group: '云计算 / 大数据 / 容器',
        content:
        {
            id: 'e',
            title: ['计算机基础', '云计算&大数据',],
            tag1: ['计算机网络', '算法与数据结构', '数学',],
            tag2: ['大数据', 'Hadoop', 'Spark', 'Hbase', 'Storm', '云计算', 'AWS', 'Docker', 'Kubernetes'],
            bottom_content: [
                {
                    img: imgs[11],
                    bottom_title: 'Spark进阶 大数据离线与实时项目实战',
                    name: 'Spark进阶 大数据离线与实时项目实战',
                    price: '￥399.00',
                    info: '中级',
                    number: '178',
                },
                {
                    img: [kc12],
                    bottom_title: 'AWS summit 2019精华：关于人工智能、应用程序开发、DevOps			 ',
                    name: 'AWS summit 2019精华：关于人工智能、应用程序开发、DevOps			 ',
                    price: '',
                    info: '中级',
                    number: '940',
                },
                {
                    img: imgs[12],
                    bottom_title: 'Spark Streaming实时流处理项目实战 ',
                    name: 'Spark Streaming实时流处理项目实战 ',
                    price: '￥388.00',
                    info: '中级',
                    number: '1082',
                },
                {
                    img: [kc13],
                    bottom_title: 'Spark SQL分析Nginx访问日志',
                    name: 'Spark SQL分析Nginx访问日志',
                    price: '',
                    info: '中级',
                    number: '1130',
                },
            ]
        },
    },
    {
        id: 'f',
        group: '运维 / 测试 / 数据库',
        content:
        {
            id: 'f',
            title: ['运维&测试', '数据库',],
            tag1: ['运维', '自动化运维', '运维工具', '中间件', 'Linux', '测试', '功能测试', '性能测试', '自动化测试', '接口测试', '安全测试',],
            tag2: ['MySQL', 'Redis', 'MongoDB', 'Oracle', 'SQL Server', 'NoSql',],
            bottom_content: [
                {
                    img: imgs[13],
                    bottom_title: '小白福音 零基础入门软件测试 首选必备课程',
                    name: '小白福音 零基础入门软件测试 首选必备课程',
                    price: '￥266.00',
                    info: '入门',
                    number: '1092',
                },
                {
                    img: imgs[14],
                    bottom_title: '玩转Vim  从放弃到爱不释手',
                    name: '玩转Vim  从放弃到爱不释手',
                    price: '',
                    info: '中级',
                    number: '11952',
                },
            ]
        },

    },
    {
        id: 'g',
        group: 'UI设计 / 3D动画 / 游戏',
        content:
        {
            id: 'g',
            title: ['UI设计&多媒体', '游戏',],
            tag1: ['模型制作', '动效动画', '设计基础', '设计工具', 'APPUI设计', '产品交互',],
            tag2: ['Unity 3D', 'Cocos2d-x',],
            bottom_content: [
                {
                    img: imgs[15],
                    bottom_title: '产品交互设计快速入门与实战',
                    name: '产品交互设计快速入门与实战',
                    price: '￥199.00',
                    info: '初级',
                    number: '686',
                },
                {
                    img: imgs[16],
                    bottom_title: '高薪设计师必修课 AE移动UI动效设计从入门到实战',
                    name: '高薪设计师必修课 AE移动UI动效设计从入门到实战',
                    price: '￥199.00',
                    info: '中级',
                    number: '302',
                },
                {
                    img: imgs[17],
                    bottom_title: 'Axure入门初体验',
                    name: 'Axure入门初体验',
                    price: '',
                    info: '入门',
                    number: '64608',
                },
                {
                    img: imgs[18],
                    bottom_title: '前端工程师必备的PS技能——切图篇',
                    name: '前端工程师必备的PS技能——切图篇',
                    price: '',
                    info: '初级',
                    number: '253992',
                },
            ]
        },

    },
]

export default list