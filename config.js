const config = {
  mode: "in", // 签到:in,签退:out
  accounts: [
    {
      username: "", //用户名
      password: "", //密码
      openId: "", //微信小程序抓包openid(可选)
      unionId: "", //微信小程序抓包unionId(可选)
      sign: true, //是否自动签到
      reSign: false, //是否重新签到
      location: "", //经纬度 (可选),例如 "120.210792,30.246026"、"经度,纬度",不填写则自动获取（推荐）
      // signImagePath: "./images/1.jpeg", //签到图片
      // needReport: false, //是否自动填写周报
    },
    // 添加多个账户
    // {
    //   username: "",
    //   password: "",
    //   openId: "",
    //   unionId: "",
    //   sign: true, //是否自动签到
    //   reSign: true, //是否重新签到
    //   signImagePath: "./images/1.jpeg", //签到图片
    //   needReport: false, //是否自动填写周报
    // },
  ],
  qmsgKey: "", //qmsg酱key
  qmsgTo: "", //推送的qq号,用,分隔(可选)
};

const modeCN = {
  in: "签到",
  out: "签退",
};
config.modeCN = modeCN[config.mode];

const apis = {
  login: "login/login.action",
  accountInfo: "account/LoadAccountInfo.action",
  projects: "student/progress/ProjectList.action",
  tasks: "student/progress/ProjectProgressInfo.action",
  //周报
  weekBlogStatus: "student/blog/Plan!getDefault.action",
  weekReportsDate: "student/blog/LoadBlogDate!weekYear.action",
  weekReports: "student/blog/LoadBlogDate!week.action",
  weelBlogSave: "student/blog/Blog!save.action",
  weelBlogSubmit: "student/blog/Blog!getSubmitData.action",
  //签到
  clockDefault: "student/clock/GetPlan!getDefault.action", //planId => traineeId
  clockDetail: "student/clock/GetPlan!detail.action", //traineeId => postInfo
  clock: "student/clock/Post!autoClock.action", //首次签到
  clockNew: "student/clock/PostNew.action", //重新签到或签退
  // clockUpdate: "student/clock/PostNew!updateClock.action", //更新最近的签到/签退记录，已有签退记录时无法更新之前的签到记录
  clockUpdate: "student/clock/Post!updateClock.action", // reClock
  // clockNew: "student/clock/Post!autoClock.action", //临时接口
  // clockUpdate: "student/clock/postTemporary!updateClock.action", // reClock 临时接口
  //上传
  uploadInfo: "uploadfile/commonPostPolicy.action", //oss info
  uploadFile: "https://xyb001.oss-cn-hangzhou.aliyuncs.com/",
  duration: "behavior/Duration.action",
  ip: "behavior/Duration!getIp.action",
  // 地图api
  map:"https://restapi.amap.com/v3/geocode/regeo",
};

const reports = [
  [
    `本周，是我实习的第一周。刚进入公司的时候，很茫然，不知道要做些什么，对自己的岗位充满期待，对公司充满好奇。领导叫做什么，我们就做什么，最开始的时候是培训。也怕自己没有能够做好相关的工作,带来不好的影响以及麻烦。好在公司给我安排了一位和我年纪相仿的小姐姐带我熟悉工作环境，工作内容。由于我初来乍到，对这个岗位的工作流程还不太熟悉，幸好我的实习负责人耐心的给我讲解了一些（什么工作）需要注意的地方，然后慢慢让我尝试自己做一下，自己去理解，我自己做的过程中，产生了很多疑问，我经常带着我不懂的问题去问负责人，负责人都耐心的教我。这一周的学习内容虽然不是很多，但是最主要的还是尽快适应工作的节奏，以及熟悉工作，我也对我的工作环境以及工作内容有了初步的了解。经过这一周的相处，公司的人也都很好，很好相处，在接下来的时间里，我会更加努力认真的学习，多问多听多学多看，努力的工作。`,
    "本周充满了新奇和挑战。在这一周中，我学到了许多新知识和技能，也体验了职场的工作氛围。首先，我参与了团队的日常工作，包括与同事合作完成项目、参加会议并记录会议纪要等。通过与团队成员的互动，我深刻体会到了团队协作的重要性。大家相互合作，共同解决问题，以达到项目的目标。我学会了如何与他人进行有效的沟通和合作，这对于未来的职业发展将是非常宝贵的。其次，我还接触了一些新的工作工具和流程。在实习的过程中，我学会了如何利用公司提供的软件来进行数据分析和报告的制作。这项技能不仅提高了我的工作效率，还使我更加熟悉了行业内的常用工具和流程。我也深刻认识到，在不断发展的数字化时代，掌握和适应新技术是非常重要的。此外，我还参与了一些培训和学习活动。公司组织了一次关于市场营销策略的讲座，我从中学到了许多关于市场调研和市场推广的知识。这次讲座为我未来的职业发展提供了很大的帮助，并且让我对市场营销这个领域产生了浓厚的兴趣。在这一周中，我还面临了一些挑战。由于我对公司的业务和流程还不够熟悉，有时候需要花费更多的时间来理解和完成工作。但是，我通过请教同事和自己不断的学习，逐渐克服了这些困难，并且在实践中不断提升自己。总的来说，这一周的实习经历让我受益匪浅。我不仅学到了专业知识和技能，还提高了自己的工作能力和团队合作能力。我期待在接下来的实习中，继续学习和成长，为公司做出更大的贡献。",
    `临近毕业的最后一年，是我们真正实习生活的开始，是汇报我们这三年来在学校学习成果的开始，是步入社会大展宏图的开始。从学校到社会的大环境的转变，身边接触的人也完全换了角色，老师变成老板，同学变成同事，相处之道完全不同。突然面对这么大的转变，我知道我必须得适应。好在同事们都很乐意帮助我，这也给我了很大的动力去学习每件事情。
    
    才来的那天最糗的事情就是去复印一点资料。平时在学校复印东西都是打印店的人复印的，从来没有自己亲手复印过。以为也没什么难的吧，谁知道我弄了半天都没复印出来，想想这么简单的事情又不好意思问同事，可急死我了。好在一个同事姐姐看见了，主动教我怎么用，还跟我说以后再有什么不懂的就问她，不用觉得不好意思。后来我就经常请教同事问题了，不会再觉得有什么好尴尬的了。
    
    由于现在还住校，所以我每天7点不到就得起床去挤公交车，就算再寒冷再差的天气，只要不是周末，都得去上班，有时候公司业务繁忙，晚上或周末得加班，那留给个人支配的时间更少。我必须克制自己，不能随心所欲地不想上班就不来，这也锻炼了我的自制能力。
    
    常言道：工作一两年胜过十多年的读书。实习时间虽然才几天，但是我从中学到了很多知识，关于做人，做事，做学问。每日重复单调繁琐的工作，时间久了容易厌倦。“在大学里学的不是知识，而是一种叫做自学的能力”。参加工作后才能深刻体会这句话的含义。我发现除了英语和计算机操作外，课本上学的理论知识用到的很少很少。我担任的是文员一职，每天都是整理文档，负责人员考勤，薪资福利，接听电话等工作，虽然工作简单但也不能马虎，一个小小的错误可能会给公司带来巨大的麻烦或损失，还是得认真完成。
    
    1个星期的实习时间看似不长，但是因为刚进公司，也许是最艰难的几天，需要适应的东西太多，我想我能够克服的，在克服的同时也尽量把工作做到最好。`,
  ],
  [
    `这算是第一周吧,虽然还不到一周,但我觉得每天都过的好长。这两天也只是培训,了解了一下公司
概况,适应了一下公司生活,转变了一下身份。
刚开始,只觉得自己轻松了很多,主要是心理上的。原因来自于我离校了,我的学生时代结束,我再
也不用在乎自己学的好不好了。我没有了学业的负担,我的那些寄托于通过学习来通往美好梦想的所有的
路都绝对的断了。没了希望,也就没有了压力。一段人生结束了,将会有新的一段历程从零开始。我知道
还会有很多问题、很多压力要面对,但与以前不同了。不管以前的目标是否达到,是否该恨自己做的不够
好,一切都归零吧。
还记的刚出校门坐上离校的汽车时自己是多么的感伤:在一个即将月圆的日子离开了哈哈。这两天也
有不少感触,虽然还没有开始正式工作。
我的工作岗位是在mp4的显示屏排线上贴一片约有三分之一平方厘米的绝缘胶片。我不知道这跟我的
专业有多大关系,也不清楚应该把哪些理论应用于实践中,毕竟任何一个具有动手能力的人都能做到。当
然,这样想时已经抛弃了我是一个顶岗实习的大专生这个身份,我是把自己当做一名普通员工看待的。在
这项工作所要求的内容上,我的速度达不到。不错,这些动作我都会做,但我是一个生产者,我需要速度
来提高效益,而我的手有点笨,反应不够灵敏,在这方面,我也很惭愧。尽管我是一个上过大专的人,但
我还不及那些没上过高中的同事。`,
  ],
  [
    `实习第xx周开始,已经逐渐进入状态,主要是通过了解公司的网站及销售的店铺,例如淘宝店铺、斐
贝专柜、阿里巴巴网站等,用电话跟客户沟通,了解一些产品品销售及顾客对产品的售后反馈问题。我在同
事的帮带下,做一些业务相关的工作。
在学习中,我了解了公司的销售网站的一些特性,网站的销售流程、支付流程、售后服务流程等相关
的功能,懂得阿里巴巴是一个大型的B2B贸易网站,淘宝网是一个大型B2C贸易网站。
--熟悉产品的特点、样式、价格、功能等,对产品进行拍照、图片修改、商品信息核对,同时还要
与客户进行面对面交谈。
已经实习了xx个礼拜,开始独立接触一些业务。
通过上周与客户的电话沟通,还有就是我通过自己学习的一些些产品知识,我很快了解到产品的特性、
功能、用途等等,这样我做起工作来就不会太困难了。
经过这xx个礼拜的学习,我可以简单的总结几个字,那就是多看、多问、多观察、多思考、多动手。
一方面是要发扬自主思考问题的能力,在碰到问题的时候,自自觉努力去独立解决,这样对问题便能够有一
个更深刻的了解,当解决的时候也会获益良多,另一方面是要要发扬团队精神。
`,
  ],
  [
    `我对社会充满了信心对我自己充满自信,参加了多场的招聘会、面试了多家的公司、但是又的失落快
把我刚丛那学校里出来的一腔热情磨灭了,自己好怀念当时不在学校读书的时光,但是时间是不可能倒流,
每天拖着沉重的脚步穿梭在这个繁华的城市间。
就像一个没有头的苍蝇到处乱撞,没有目标更没有方向,有的只是失败与无奈。地球总是在转的,时
间在一秒一秒的过去,而我还是在为工作的事在发愁,天天去面试,重复的做同一样事情,结果都是一
样。但是我还是没有放弃,而是继续在寻找符合自己的工作,这时候的我更是万分的焦急。
终于工夫不负有心人,让我找到一分工作。来到公司,陌生的环境。陌生的人和事,让我感觉有点狗
谨,努力让自己的微笑减少言语上的笨拙。第一天并不像我想象的那样,由人事经理带我们熟悉公司的环
境,结识新的同事。大家似乎都很忙,可能现在是业务的旺季季吧。这是第正式与社会接轨踏上工作岗位,
开始与以往完全不一样的生活。每天在规定的时间上下班,」上班期间要认真准时地完成自己的工作任务,
不能草率敷衍了事。
我们的肩上开始扛着民事责任,凡事得谨慎小心,否则随时?可能要为一个小小的错误承担严重的后果
付出巨大的代价,再也不是一句对不起和一纸道歉书所能解决快的。
`,
  ],
  [
    `我对社会充满了信心对我自己充满自信,参加了多场的招聘会、面试了多家的公司、但是又的失落快
把我刚丛那学校里出来的一腔热情磨灭了,自己好怀念当时不在学校读书的时光,但是时间是不可能倒流,
每天拖着沉重的脚步穿梭在这个繁华的城市间。
就像一个没有头的苍蝇到处乱撞,没有目标更没有方向,有的只是失败与无奈。地球总是在转的,时
间在一秒一秒的过去,而我还是在为工作的事在发愁,天天去面试,重复的做同一样事情,结果都是一
样。但是我还是没有放弃,而是继续在寻找符合自己的工作,这时候的我更是万分的焦急。
终于工夫不负有心人,让我找到一分工作。来到公司,陌生的环境。陌生的人和事,让我感觉有点狗
谨,努力让自己的微笑减少言语上的笨拙。第一天并不像我想象的那样,由人事经理带我们熟悉公司的环
境,结识新的同事。大家似乎都很忙,可能现在是业务的旺季季吧。这是第正式与社会接轨踏上工作岗位,
开始与以往完全不一样的生活。每天在规定的时间上下班,」上班期间要认真准时地完成自己的工作任务,
不能草率敷衍了事。
我们的肩上开始扛着民事责任,凡事得谨慎小心,否则随时?可能要为一个小小的错误承担严重的后果
付出巨大的代价,再也不是一句对不起和一纸道歉书所能解决快的。
`,
  ],
  [
    `这周来了几个新的服务生,从他们身上我看到之前我的影子--带着梦想与憧憬,用青涩稚嫩的眼光
看着这个世界,小心翼翼地对待所有人。经过实战磨练,我的业务熟练了很多,能够独立地解决一些问题
了。前台是酒店的信息中枢,业务量大,客人多的时候真的是忙的不可开交。看到忙碌的场面就像是一场
混战。当班的时候就像是在战场上,客人一批一批的上,我们一批一批的打退,在前台我们都必须遵循
个原则--让客人尽快在你眼前消失,当然不是敷衍和搪塞。因因为客人到前台都是来解决问题的,我们应
该尽快的帮助客人解围,不仅节省客人的时间也减少我们的麻烦1.
说到在前台上班可不是一件轻松的事情,是身心疲惫。由于业务量大,每个班次都要完成自己的任务
后才能下班,遇到客房率高的时候,拖延下班时间是常有的事情,而且要把遗留的问题与下一班次交接清
楚,否则会引起麻烦。另外,责任一定要落实到个人,每一笔业务之后都要有当事人的签名,以免出现问
题时找不到责任人。
为什么大学生初出来工作显得与社会格格不入呢?那天,我静下不心来好好地想一想,所有这些问题的
根源都来自一种心理--理想与现实的落差感。大学生走出纯清吉理想化的象牙塔来到现实社会中,发现许
多事情和自己想象的并不一样,甚至相差甚远,有很多人和事让我们看不惯,产生许多不平衡的心理,在
这种心理的作用下,摩擦、冲突、矛盾开始在日常工作中产生。在经过一段时期的磨合之后,我们的心也
累了,激情也灭了,我们被现实的社会打败了,开始学会接受,重新定义这个社会。
`,
  ],
  [
    `办公室文员,每天将面对公司的一些重要信息,虽然他们不能够在高岗上去处理公司的经济,但是他们在幕后学习,这是一种"偷学的本领"。对于一个刚刚出校园的大学生来说,这是一种必要的学习能力。在我打过的报告中,我看到了一个公司,需要很好的经营离,离不开每个部门的精心计算,只有这样,
才能够更多的节约成本,才能够在经济活动中获取更多的利益。这样一个公司才能不断发展。
为了能够真正的学到知识,我很严格的要求自己去做好每一件事情,即使再简单的事情我都会认真考
虑几遍,因此,虽然做得不算快,但能够保证让同事们满意。同事通常也不催促,都把任务安排好,然后
便交给我自己去处理,同时还不时提供一些帮助。等慢慢熟悉起来,相信做起事情也会越来越顺手的。一
方面要发扬自主思考问题的能力,在碰到问题的时候,自觉努力去独立解决,这样对问题便能够有一个更
深刻的了解,当解决的时候也会获益良多。另一方面,要发扬团队精神。公司是一个整体,公司产品是团
队的结晶,每个人都需要跟其他人更好的沟通和交流,互相帮助,合力完成共同的目标,团结众人的智慧
才能够发挥大的效能。
这一周的我,真正融入了这个集体,我看了集体的协调过程,需要同事们的互相沟通,也需要领导与
下属良好的关系,才能够将自己的事情做得更好。
`,
  ],
  [
    `俗话说的好一年之季在于春,一天之季在于晨,又是一个星期的开始,早上起来呼吸着窗外的新鲜空
气,来到厂里开始新的工作,将上个星期的零件图装配起来,我以为本来是很简单的事,不过事实并不是
想象中的那样的简单,在装配过程中出现了许多问题,这下可把我弄晕了,都不知道该从何下手,比如说
在装配的过程中出现尺寸的不一样,出现很大的间隙等等其他的许多问题。一时间看出许多的毛病和错
误,只好再次慢慢的修改,寻找还有没有其他的错误。经过几天的奋斗,修改和检查这个工作快临近尾声
了,我总是在希望我的图不要在出现其他的错误。
一天从早到晚都干个不停,晚上还要加班,那几天真是一个尽的叫累啊!恨不得一下就过去,事实是
不可能的,只能一天又一天在忙碌中度过。回头想想这几个星期感觉自己尝到人间的酸甜苦辣,感觉时光
是度日如年,十分的难熬。有些时候整个人早上都不怎么想起来,盼望着什么时候能够放假休息一下,好
好的放松个一天两天,终于结束了一个星期的劳累生活,回过头在想想这个星期的点点滴滴,不禁的笑了
起来。
在接下来的一段时间里面,我将以更大的决心,更大的勇气,更大的毅力去完成公司分配下来的任
务,使自己更上一层楼。
`,
  ],
  [
    `每当任务多的时候就感觉到烦躁,所以经常要安慰自己,慢慢漫完成任务现在只要保证质量就行,不求
速度,心情慢慢就变好了。这周的任务对于我来说还是比较多多的,每天都要装差不多10台电脑的系统还要
换电脑的一些硬件,另外自己还要抽出时间学习其他东西的维修和护理,每天都是比较忙碌的。
半个月的时间过的很快,每天这样起床、上班、下班,再上班班、再下班、然后睡觉;虽然每天觉得比
较累,不过我觉得这段时间过得比在学校的时候有意义。在公司每天都可以维修不同的电脑,学到更多的
知识,可是在学校只有上课,吃饭,上网,睡觉,这样的日子子很是颓废与无聊。经过一周的锻炼我已经能
够非常熟练的组装电脑硬件并且安装客户需要的软件,满足客客户的要求。我现在慢慢的开始更加忙碌了,
现在可以跟着同事外出维修电脑,忙碌的时间过的是那么的快。
现在已经开始步入正轨,正式的接受了所有该做的和需要做的的工作内容了。其实店里的工作真的很
杂,只要涉及到计算机方面的所有事物都得去了解和掌握,色包括维修电脑、装打印机、传真机......以前对
于什么是打印机、传真机、复印机也都只是知道有什么用而已己,至于怎么用也不是很清楚,更别说是里面
的组件了,什么是鼓组件、什么是传感器等等,经过一周的学学习我已经能够熟练说出它们的名字,并且能
够组装完成。
`,
  ],
  [
    `通过这几周的环境适应阶段,我也基本上跟的上单位的节奏了。但仍是对出纳岗位的工作感念有些模
糊,之前,我以为出纳只是跑一下银行,算一下现金,认为只不过是些简单而琐碎的工作。在实习过程中
的探索和工作后,我改变了原来的看法,即使琐碎的工作也是很不简单的。
这一周我的主要学习任务是"跑银行"。单位收付业务主要是通过银行完成的,所以这一周我的工作
量突增,几乎一半的时间是在各个银行之间穿梭。挂号、排队、、填写汇款单、取款单。回到单位后,还要
打出银行对帐单,然后填写收款收据,加盖银行收讫章。后便运用到在学校学到的知识了,那便是登日记
账。把每一笔款项仔细认真的登记在账簿上。
这一周正好赶上月底,我在老师的带领下,对库存现金、银行、对账单以及日记账进行了全面的清点,
做出现金、银行存款月报表交到会计处。并除去企业必要的零!星开支后的多余现金存到银行,当然这个任
务一如既往的交到我手上。月初是财务科忙的阶段,不但要结!账还要填制凭证做出报表并缴纳税金,虽然
我不是会计人员但也非常忙碌,要把收到的收据、电汇单据、增值税发票、车票等等一系列的单据分门别
类后交到不同职责的会计处。虽然紧张忙碌但我也感觉到从没有过的充实,在所有人都忙碌的时候我也身
在其中,这让我感觉到我终于成为财务科的一员。
`,
  ],
  [
    `又一周过去了,开始渐渐适应这里的生活习惯,每天看着他们在这里的你们的那稚嫩的童音向我问
好,心里真的好高兴。
听课依旧继续着,渐渐地发现各个老师上课的方式各有特色。慢慢领会到那句对我来说陌生的话"教
学有法,教无定法,贵在得法"。老师的讲课方式,是从某一个现象或者某一道题目中得出来的,体现学
生主动学习的方式。在讲评题目的过程中,从学生的角度分析所,剖析学生的错误所在。在这期间我也尽量
去听其他科系老师的课,做好听课记录,多学习不同专业老师而的教学方法和经验。课下又向老师请教,在
听老师的课中获得了哪些知识。例如对不同的学生要用不同的的教学方法,因材施教。对于班级中成绩较好
的学生,就尽量出一些思考题,以便他们积极思维,开拓他们的解题思路,提高他们的解题能力,对于差
生,也不要气馁,总是及时发现他们身上的闪光点,利用课余余时间,耐心的帮他们辅导,不厌其烦地教,
鼓励学生不懂就问,端正其学习态度,努力提高学生学习成绩贵。
批改完作业的错误统计其实是一项重要的任务,反馈了教师自自己在课堂上的知识点的遗漏。每次批改
完作业,都要纠结一段时间,应该怎么统计错误,做到"快、狠、准"。纠结了两周,老师可能终于忍不
住了,便把他的统计错误的妙招传授给我们。回来之后,一再再地思考,为什么老师想的到东西,自己却是
如此的陌生呢!
`,
  ],
  [
    `本周是我在公司C的第三周实习，我在这一周中积极参与工作，并不断学习和成长。在本周的实习中，我继续参与了公司的日常工作，并且承担了一些更具挑战性的任务。通过这些工作，我进一步提高了自己的专业知识和技能，并学会了更加高效地处理工作。与此同时，我也注意到了团队合作的重要性。在与同事的合作中，我学到了如何更好地沟通和协调，以实现共同的目标。大家相互支持和理解，共同努力，使我们能够充分发挥个人的优势，以最佳的方式完成工作。在这一周的实习中，我还有幸参与了一次行业内的研讨会。在研讨会中，专家们分享了他们的经验和见解，让我对行业的未来发展有了更清晰的认识。我也有机会与其他实习生和专业人士进行交流和讨论，拓宽了我的视野。尽管在实习过程中遇到了一些困难和挑战，但我通过积极的态度和不断努力克服了它们。我相信，挑战是成长的机遇，只有在面对困难时，我们才能够发挥出自己的潜力。总的来说，这一周的实习经历让我受益匪浅。我不仅学到了专业知识和技能，还提高了自己的团队合作能力和解决问题的能力。我期待在接下来的实习中，继续努力学习和成长，为公司做出更大的贡献。`,
  ],
  [
    `时间过的真是快啊!不知不觉的将近两个多月了。对于刚出学学校的我来说生活的点滴都是一个学习的
过程,比如说我的日常生活,从学校出来了,什么都要靠自己己,刚来厂里的时候,我连做饭都不怎样会,
有些时候都煮的不熟,正所谓在家里过惯了那种衣来伸手,饮反来张口的生活。开始几次都没做好,但是之
后慢慢的适应了,越做越好了,同时自己也开始慢慢的学习做做菜了,虽然做的不怎样好,但是我还是每一
天坚持的去做,相信总有一天会做好的,正所谓功夫不负有心心人,我坚信总有一天会弄好的。
到了这一周说说我的感想,深刻的还是交际方面的。像我一个个人在外面,生活确实不容易。俗话说的
好在家靠家人,出门靠朋友。出来交朋友是十分重要的,而看准人,看好人,交好人是更重要的,在结交
新朋友之前要思考好这个人是否值得自我去交,看准人是交朋朋友的一个重要条件,看好人则是交朋友的一
个中心环节,交好人则是简单的了。
我的公司虽然不怎样大,但是有几个人就有几种不一样的社会会形态。有些时候我都会不禁的发出感
慨,也许正因为社会上有这些不一样的人,不一样的事,才能老构成这个复杂而又无奇不有的社会。社会真
是让我感慨万千,如果说社会是大海,那我就是一滴水,终究完会随着时间的流逝而滚入滔滔的大海随波逐
流。
`,
  ],
  [
    `这周星期一是我实习单位，_周年庆祝活动，同事们就提议说晚上搞个聚会，没有结婚的人都可以参加，结了婚的也可以参加，正式员工可以参加，实习员工也可以参加。虽然我来的时间不长，但是同事们说我必须参加，不许找借口不去。我想这是个很好的机会让我更加了解这些对我这么好，这么照顾我的同事们。我对他们说过，这里的工作氛围让人感觉好轻松，每个人都好亲切。他们告诉我，除了主任是本地人，其他的工作人员都是来自五湖四海，本来就是背井离乡，所以大家在一起就难免变得互相理解，互相帮助，人在外，谁没有个难处呢。是啊，人在外，谁没个难处呢。多么朴实却温暖的一句话。

    这周即将结束，我发现工作作中遇到问题，我们最好采取请教的态度与口吻与他们说话，虽然他们现在的职位和你同等或者还不如你，但三人行必有我师，或许他们就掌握着很多工作中实用的东西。刚刚参加工作或者新到一个单位，应该如何与周围的同事相处，这对新走上工作岗位的年轻人来说极为重要。学会与人相处，可以让你少走弯路，尽早成功。其实，
    
    每一个人要取得成功，仅有很强的工作能力是不够的，你必须两条腿走路，既要努力做好自己分内的工作，又要处理好人际关系。`,
  ],
  [
    `周一开始我跟其他几位同事去分部工作，所以最近上班的场所一直都是在单位分部，每

    天早上到总单位之后，就直奔单位分部。在单位分部虽然没有在办公室那么舒适和轻松，但是毕竟现在是有目标要去达成，所以比在前一段时间在办公室时更加的充实，时间也会觉得过得更加快。
    
    在这期间，单位分部的工作人员都对我很好。在实际工作中，大学里面最专业的知识还是不够用，很多需要在工作中继续学习，因此我在工作岗位上遇到了一些麻烦。同事们在知道的我的工作任务后，都积极主动的帮助我，告诉我他们总结出来的区别，让我突然觉得每个任务都能轻车熟路，因为他们的帮助，让我完全加快了我的工作进程。想真正地做成一件事情，需要你有锲而不舍的精神。不管我们想在哪个领域做成一件事情，如果你已经认准了目标，那就一定坚持不懈地做下去。罗马不是一天建成的，只要你一天天用心地去做，总有一天，量变会发生质变。
    
    这一周，我总结了工作过程中的关于挫折的感悟。在工作过程经过遇到一些挫折。关于挫折，早有职场高手总结出至理名言：“人在职场飘，哪能不挨刀?”这是一种对工作洒脱的态度。对待工作的挫折，就稍微转换一下努力的方向。说不定更好。另外一点也很重要，困境中请你自己鼓励自己，不到万不得已，请不要把自己的底牌亮给别人。要知道，困难时要求得到的帮助，价码总是会更贵一些的。`,
  ],
  [
    `今天指导师父说十分钟后让我和陪他一起去其他单位参观学习，让我带上笔和笔记本，他还跟我说了一句，“上次的那个任务完成的很漂亮，圆满到达了我的要求，我很满意。”他还表扬我最专业相关基础知识非常扎实，是他见过最专业学生中动手能力比较强的学生。当时我差一点儿兴奋得尖叫出来。几天的努力总算我的努力没有白费，没有什么能比得上得到师父的认可更加让我激动了。

    通过这段时间的了解，原来师父并不是看上去那样一个不起眼的人，听同事说了很多他厉害的事迹，如果能从他身上学到东西，对我这次实习所得和以后的职业发展之路一定有很大的帮助。在外面的路上，师父说，这几天我的任务就是在上次的基础进行扩展。
    
    本周我总结出：在职场上取胜的黄金定律之一便是要有责任心，凡事尽力而为，并且要任劳任怨。在工作上，永远不要试图去敷衍自己的老板。有人曾经访问过许多在事业上功成名就的人，他们一个共同的特点便是，在工作上投入的时间及精力，远远要比工作本身所要求的多。我相信我能做的更好。`,
  ],
  [
    `这一周，我开始深入学习与自己岗位相关业务知识，得到同事的帮助下，我先从规范下手，就是熟悉下当前最专业行业方面的规范，再就是记各种工作相关的必备知识。经过两天的苦研，我终于能基本看懂结构施工图了。经过前期实习后，我大概了解了整个工作程序。

    今天我开始正式参与部分核心工作了，师傅给我布置了一个任务。大学里面学习的最专业的知识能真正得到实际应用，我很高兴，这是他对我的一次考验，同时也给了我一次机会。因此，我要尽力做好它。
    
    工作过程我得出了一些体会：我工作过程要相信自己，如果做不到这一点，你就无法成为一个好的职员或者好的领导。一个相信自己的人，才会在走路时神采飞扬，让老板看上去你有无穷的精力;一个相信自己的人，才会在待人接物时落落大方，这一切能帮助老板培养对你的信心，必要时才会委你以重任。你怎么对待别人，别人就会怎么对待你。在工作中，要待人如待己。在你困难的时候，你的善行会衍生出另一个善行。在别人遇到困境时，热情地伸出援手。在职场上，尽可能地做一个与人为善的好人，这样，当你在工作上不小心出现纰漏，或当你面临加薪或升职的关键时刻，可尽可能减少别人放冷箭的危险。`,
  ],
  [
    `渐渐的我也是进入到工作的一个状态上来了，当然这一周的工作任务也是加重了，毕竟之前也是适应了，每天要拨出的数量也是让我从早忙到晚，基本没有什么太多的休息时间，不过在这忙碌之中，我对于话术也是更加的熟练去掌握了，同时我也是通过量的积累，以及上周完成了目标的成就感，这周也是超额的完成，得到了部长的肯定，不过看到我的周排行在同事中的位置，我也是感到有些失落，的确实习的水平和那些优秀同事的业绩水平差距真的巨大啊。

    不过我也是不气馁，我来到公司都还没有一个月，而且真的工作也才两周的时间，我想再努力努力，肯定可以迎头追上去的。毕竟我的能力我还是相信能做好的。`,
  ],
  [
    `这周，我感受到自己遇到的客户真的特别的难缠，而且也是目标的增加，让我感觉到了压力，最终这周的业绩目标还是差一些，没有完成，我也是特别的懊恼，周五下班之后，部长也是找我谈话，对于我没有完成业绩，他也是没有说太多，也是鼓励了我，说虽然目标是没完成，但是和之前相比，其实也是一直都在进步的，而且工作之中，怎么可能不会遇到挫折。

    遇到了，跌倒了，并不可怕，只要站起来，勇敢的前行，下次努力，达成就好了，也是让我觉得部长真的关心我们，照顾我们，虽然目标是差了一些，但是我并没有特别的低落，特别是部长说完之后，我也是想着，下周一定要做好，不能让部长失望，周末的时候，我也是要去多思考这周做的不好的地方是哪些，要去改进。`,
  ],
  [
    `这一周，我又是重新的出发，重新的达成了目标，我也是感到特别的高兴，之前在周末的反思还是非常的有用，特别是部长跟我的谈话，也是让我意识到，一时的挫折并没有什么，再接再厉就是了，特别是我也是感受到自己的进步很大，和优秀的同事差距也是越拉越近了，虽然还没有超过他们，但是也不算差了。

    况且我还是个实习的，我想等我经历得更多，对于客户更加的熟悉，有了更多的经验，那么我的业绩也是会名列前茅的，特别是我也是感受到看到我的成绩，其他和我一起来到公司实习的同事，也是更加的努力了，的确别人可以，那么我为什么就不行，其实也是努力，去执行，去多反思把方法用对，业绩的目标是完全可以达成的。`,
  ],
];

module.exports = { config, apis, reports };
