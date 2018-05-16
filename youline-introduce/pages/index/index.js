//index.js
Page({
  data: {
    companyPro: "海呐天成厦门分公司是一家专注于行业解决方案和软件服务的年轻创业公司，目前服务业务包含：AR/VR解决方案、行业解决方案、APP开发、软件开发、微信开发、UI设计和网站建设，有需求的小伙伴尽情来撩我，联系电话：15080326203（晓掌柜）。",
    project:[
       {
        id: "1",
        select: "select1",
        name: "由来AR浏览器",
        videoSrc: "http://res.youline.me/introduceVideo/1.mp4",
        text: "由来AR浏览器运用了目前最新的AR（增强现实）技术,是一套web端编辑、移动端体验的工具软件。傻瓜式的快速编辑器，用户只需要在编辑器上操作3-4个步骤就能创建自己的AR项目，用由来移动端扫描设定的识别图，就会有惊喜呈现。"
      },
      {
        id: "2",
        select: "select2",
        name: "AR涂鸦欢乐海洋",
        videoSrc: "http://res.youline.me/introduceVideo/2.mp4",
        text: "欢乐海洋运用了目前最新的AR（增强现实）技术，小朋友们通过对指定画纸的涂鸦上色后，放置到相应的扫描仪上扫描，纸上的平面图案的鱼就会游到我们虚拟的海洋世界里面来，小朋友还可以通过手拍打投影墙幕来驱赶虚拟世界中的鱼类！"
      },
      {
        id: "3",
        select: "select3",
        name: "AR城市沙盘",
        videoSrc: "http://res.youline.me/introduceVideo/3.mp4",
        text: "AR城市沙盘项目运用了目前最新的AR（增强现实）技术，利用投影机在白色会议桌上投影不同图像，用手机或移动平板电脑扫描会议桌上的图像，可以看到栩栩如生的虚拟建筑在现实的会议桌上伫立，随着会议桌上的图案变化而变化，并可以与虚拟建筑交互。"
      },
      {
        id: "4",
        select: "select4",
        name: "AR趣味涂鸦",
        videoSrc: "http://res.youline.me/introduceVideo/4.mp4",
        text: "AR趣味涂鸦项目运用了目前最新的AR（增强现实）技术，用户可以在指定的画纸上DIY涂鸦，然后用我们的软件扫描，你会发现你为我们虚拟的3D角色也涂鸦了，虚拟角色的颜色搭配都由你DIY哦，赶紧发挥你的想象力和动手能力吧！"
      },
      {
        id: "5",
        select: "select5",
        name: "VR头显单车互动",
        videoSrc: "http://res.youline.me/introduceVideo/5.mp4",
        text: "VR头显单车互动项目运用了目前最热的VR（虚拟现实）技术，利用市面上主流的VR眼睛配合能传输速度和方向等数据的传感单车，用户边骑行边游览虚拟世界，身临其境！"
      },
      {
        id: "6",
        select: "select6",
        name: "VR大屏单车互动",
        videoSrc: "http://res.youline.me/introduceVideo/6.mp4",
        text: "VR大屏单车互动项目运用了目前最热的VR（虚拟现实）技术，用户在骑单车的时候，单车上的传感器会实时将自行车行驶速度和方向传输给客户端，客户端的画面根据收到的数据保持实时同步，用户可以边骑行边游览观光虚拟的美景！"
      },
      {
        id: "7",
        select: "select7",
        name: "大屏体感互动 人脸",
        videoSrc: "http://res.youline.me/introduceVideo/7.mp4",
        text: "大屏体感互动项目运用了目前最热的体感互动技术，用户可以直接通过手势或肢体动作与大屏中的虚拟内容交互。人脸互动实现了用户在体感设备的有效识别范围内，大屏中会为每个用户的脸部随机佩戴当下流行的面具或头饰，可以通过手势控制拍照并生成分享二维码，用手机扫描二维码就能把你美美的照片分享给你的好友啦。"
      }
    ]
  },
  onShareAppMessage: function () {
    return {
      title: '海呐天成 一个靠谱的合作伙伴',
      path: '/page/user?id=123',
      success: function(res) {
        // 分享成功
      },
      fail: function(res) {
        // 分享失败
      }
    }
  },
  isShow: function(e){
    var postId = e.target.dataset.postId;
    var index = postId - 1;
    var param = {};
    var string = "project[" + index + "].select";
    param[string] = !this.data.project[index].select;
    this.setData(param);
  }
})