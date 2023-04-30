const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const player = $(".wrapper");
const cd = $(".cd-player");
const heading = $("header h2");
const cdThumb = $(".cd-thumbnail");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlist = $(".play-list");
const lyric = $("#lyrics-container");
const search = $("#search-right");

let listLyrics;
const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  config: {},

  songs: [
    {
      name: "Ngủ một mình",
      singer: "HieuThuHai x Kewtie",
      path: "./assets/songs/ngumotminh.mp3",
      image: "./assets/img/ngumotminh.jpg",
      lyrics:["HOOK\nHãy ở lại với anh\nThêm một ngày nữa thôi\nVì anh không muốn phải ngủ một mình đêm nay đâu\nBên ngoài và uống say\nHay là ta nằm đây cả đêm\nBởi vì anh không muốn phải ngủ một mình đêm nay\n[VERSE 1]\nbaby nói cho anh nghe\nem hãy nói cho anh nghenhững điều mà\nđiều em muốn sau khi đêm nay trôi qua\nlà một trái tim hay những món quà\nem muốn đôi tay anh đặt ở những nơi đâu\nanh đã nhắm đôi môi từ những ngày đầu\nim needing all your love\nnhưng em sẽ chẳng thể thấy anh khi qua ngày mai\nbởi vì thiên bình đây chẳng thể nào bên ai mãi mãi\nhãy hứa không nói cho ai\nhình em gửi anh làm sao mà có thể\nthay những khi mà em đằng sau nằm ôm anh\n[HOOK]\nHãy ở lại với anh\nThêm một ngày nữa thôi\nVì anh không muốn phải ngủ một mình đêm nay đâu\nBên ngoài và uống say\nHay là ta nằm đây cả đêm\nChỉ là anh không muốn phải ngủ một mình đêm nay\n[VERSE 2]\nchẳng phải đón hay đưa\ncứ việc lên nhà anh như cách em từng đến thôi\nđây đâu phải là lần duy nhất của em ở đây\nuhhh dù là ta chẳng phải của nhau\nnhưng chỉ mình anh được hôn lên tóc em\nchẳng phải quay mặt về nơi khác lúc em thay đồ\naah ah ah ah ah ah ah ah ah\nanh biết điều đó là sai\nnhưng không cho em gặp ai\nphải ở bên anh đến ngày mai yah phi ở bên anh đến ngày mai yah\nphải ở bên anh đến ngày mai\nbởi vì chúng ta cũng chỉ là\nhai con người cô đơn đến với nhau\n[HOOK]\nHãy ở lại với anh\nThêm một ngày nữa thôi\nVì anh không muốn phải ngủ một mình đêm nay đâu\nBên ngoài và uống say\nHay là ta nằm đây cả đêm\nChỉ là anh không muốn phải ngủ một mình đêm nay\n."]
    },
    {
      name: "Mình chia tay đi",
      singer: "Erik",
      path: "./assets/songs/minhchiataydi.mp3",
      image:"./assets/img/minhchiataydi.jpg",
      lyrics:["Đã mất nhau thật rồi bởi vì em quá nhiều đổi thay\nĐã mệt mỏi khi cố gắng chấp nhận\nSau những gì anh đã trao về em, thì em có quá nhẫn tâm không?\nĐừng nói yêu làm gì vì anh đã nhiều tổn thương\n Môi im lặng nhưng trong tim cảm nhận\n Hết những lời cay đắng\nCòn yêu thương đã đi về đâu?\nGiấu đi những niềm đau,rồi ta sẽ ra sao?\nNgồi bên nhau nhưng vẫn thấy cô đơn biết bao\nGhì chặt vào cơn đau, để nước mắt lặng xuống\nLòng càng cố níu kéo tay càng buông\nVì em, anh sẽ ra đi, để em được vui\nBuồn thêm chút nữa anh cũng ngậm ngùi\nXoá tên của anh trong ký ức\nEm sẽ hạnh phúc hơn\nVì em anh sẽ, một mình nhận lấy\nGiông tố ngoài kia\nBình yên em hãy giữ cho em\nChỉ cần em luôn vui\nVì đó cũng chỉ là\nĐiều cuối anh cần làm trước lúc ta… chia ly\nGiấu đi những niềm đau, rồi ta sẽ ra sao?\nNgồi bên nhau nhưng vẫn thấy cô đơn biết bao\nGhì chặt vào cơn đau, để nước mắt lặng xuống\nLòng càng cố níu kéo tay càng buông\nVì em, anh sẽ ra đi, để em được vui\nBuồn thêm chút nữa anh cũng ngậm ngùi\nXoá tên của anh trong ký ức\nEm sẽ hạnh phúc hơn\nVì em anh sẽ, một mình nhận lấy\nGiông tố ngoài kia\nBình yên em hãy giữ cho em\nChỉ cần em luôn vui\nVì đó cũng chỉ là\nMột điều anh cần làm khi đã biết\nAnh mất em mãi mãi rồi\nMột người nhắc tên em, ngỡ rằng anh đã quên\nNhưng vẫn đau như ngày đầu tiên\nThì đừng nhớ tên anh, đừng cố gắng nữa chi\nNiềm vui cho em, là khi chẳng còn anh ở bên\nHãy quên, chúng ta từng yêu, từng hạnh phúc quá nhiều\nThời gian sẽ xoá đi hết bao điều\nHứa bên cạnh nhau mãi mãi\nRồi cứ thế cũng nhạt phai\nNgày đầu bên nhau, đã là lầm lỗi\nYêu em anh đã sai\nThì thôi coi như chưa bắt đầu\nDù mai anh ra đi\nĐiều cuối anh cần làm\nLà thấy em được hạnh phúc với ai\n"]
    },
    {
      name: "Waiting for you",
      singer: "MONO",
      path: "./assets/songs/waitingforyou.mp3",
      image: "./assets/img/waitingforyou.jpg",
      lyrics:["Chiều đang dần buông hạt mưa rơi xuống không gian lắng yên\nSuy tư vấn vương ngồi mộng mơ\nĐơn phương nhớ đến một nàng thơ\nGió đông ùa về mang những ê chề (woh)\nNgỡ là trái tim khô cằn héo úa sẽ thôi buồn đau\nNhưng thật cay đắng khi biết là (ú oà)\nMình chỉ là một người đến sau (hey)\nBiết em đã có người ở gần bên\nNhưng anh sẽ vẫn đứng ngay đây và chờ em\nMưa giông bão tố chẳng quan tâm đến ngày đêm\nKẻ si tình này chọn ở phía sau thầm nhớ mong em bae bae\nVì say mê ánh mắt yêu luôn cả bờ môi\nMuốn nói với cả thế giới chỉ thương em mà thôi\nĐắm đuối uh cháy lên ngọn lửa tình yêu\nBùng lên mạnh mẽ và thiêu đốt baby that’s what I feel\nMy girl I’m waiting for you\nMột bông hồng xinh tươi thắm huh trông em kiêu sa\nĐôi chân thướt tha mặn mà (uh)\nHương thơm miên man dịu dàng (uh)\nDáng duyên nụ cười say đắm yêu người\nNgỡ là trái tim khô cằn héo úa sẽ thôi buồn đau\nNhưng thật cay đắng khi biết là (ú oà)\nMình chỉ là một người đến sau (hey)\nBiết em đã có người ở gần bên\nNhưng anh sẽ vẫn đứng ngay đây và chờ em\nMưa giông bão tố chẳng quan tâm đến ngày đêm\nKẻ si tình này chọn ở phía sau thầm nhớ mong em bae bae\nVì say mê ánh mắt yêu luôn cả bờ môi\nMuốn nói với cả thế giới chỉ thương em mà thôi\nĐắm đuối uh cháy lên ngọn lửa tình yêu\nBùng lên mạnh mẽ và thiêu đốt baby that’s what I feel\nMy girl I’m waiting for you\nI’m waiting for you (oh oh)\nI’m waiting for you (oh oh)\nChờ em về đây với anh\nMình cùng đan bàn tay\nẤm áp bao đêm ngày\nYeah\nChờ em chờ em ừ thì chờ em\nChờ em chờ em chờ đến bao giờ\nBiển khô cạn trời không còn đầy sao\nThì anh vẫn nơi đây và chờ em\nBiết em đã có người ở gần bên\nNhưng anh sẽ vẫn đứng ngay đây và chờ em\nMưa giông bão tố chẳng quan tâm đến ngày đêm\nKẻ si tình này chọn ở phía sau thầm nhớ mong em bae bae\nVì say mê ánh mắt yêu luôn cả bờ môi\nMuốn nói với cả thế giới chỉ thương em mà thôi\nĐắm đuối uh cháy lên ngọn lửa tình yêu\nBùng lên mạnh mẽ và thiêu đốt baby that’s what I feel\nMy girl I’m waiting for you\n"]
    },
    {
      name: "Rồi ta sẽ ngắm pháo hoa cùng nhau",
      singer: "O.lew",
      path: "./assets/songs/RoiTaSeNgamPhaoHoaCungNhau.mp3",
      image: "./assets/img/roitasengamphaohoacungnhau.jpg",
      lyrics:["Người đón em đến bên đời là điều tuyệt nhất để khiến em cười\nNgười cứ như ô che mưa, như mây bay qua cho ngày trong xanh\nỞ đây có anh này, em thật nhỏ bé trong chiếc ôm này\nẤm hơn chăn mà, còn thơm hơn hoa mà, sao em nỡ rời xa?\nRồi ta sẽ ngắm pháo hoa cùng nhau trên tầng thượng phía bên kia dòng sông\nVạn lời chúc ấm êm cho nhau là sẽ thành đôi sau vài cái xuân\nMong trời sẽ thương em, thương anh và cho đôi mình mãi bên nhau dài lâu\nCho dù thế gian kia cuồng quay trăm bộn bề, ta vẫn không cách rời, huh-huh-uh\nThấy anh đứng đây rồi, mắt cười cong khoé mi hí đây rồi\nCàng đắm say thế nên em lại sợ một mai mình rời xa nhau\nAnh thơm vào má em này, cho chừa cái thói nói vớ vẩn này\nMặt ngây ngô ra rồi, còn anh thì đứng cười\nĐây có phải là điều tuyệt nhất?\nRồi ta sẽ ngắm pháo hoa cùng nhau trên tầng thượng phía bên kia dòng sông\nVạn lời chúc ấm êm cho nhau là sẽ thành đôi sau vài cái xuân\nMong trời sẽ thương em, thương anh và cho đôi mình mãi bên nhau dài lâu\nCho dù thế gian kia cuồng quay trăm bộn bề, ta vẫn không cách rời\nDù mai Mặt Trời không chiếu sáng trên hành tinh này\nThì em (thì em) vẫn sẽ tìm thấy anh bằng trái tim này, oh\nDù mai đời người dẫu có cách ngăn tình ta\nThì em xin một lần không tên, nguyện yêu anh một đời an yên, oh-huh-oh-huh-huh\nVạn lời chúc ấm êm cho nhau là sẽ thành đôi sau vài cái xuân\nMong trời sẽ thương em, thương anh (mong trời sẽ thương em) và cho đôi mình mãi bên nhau dài lâu\nCho dù thế gian kia cuồng quay trăm bộn bề, ta vẫn không cách rời\nHuh-uh-oh-oh\nHuh-uh-oh-uh-oh (huh-uh-oh-uh-oh)\nRồi ta sẽ ngắm pháo hoa cùng nhau\n"]
    },
    {
      name: "Giả vờ yêu",
      singer: "Ngô Kiến Huy",
      path: "./assets/songs/giavoyeu.mp3",
      image: "./assets/img/giavoyeu.jpg",
      lyrics:["Đêm chia ly mưa buồn rơi héo hắt\nBước chân anh trên đường khuya hoang vắng\nBao yêu thương nơi này ta đã có\nChính nơi đây chúng ta xa rời nhau\nKhi yêu nhau bây giờ anh mới biết\nTrái tim em không còn như lúc trước\nSau đêm nay hai đường hai lối bước\nĐường đi mới sẽ vắng bóng em bên đời anh\nLần cuối ta nắm tay nhau\nThì hãy nói hết đi em\nNhững năm tháng yêu nhau giả vờ\nMình cứ cố gắng bên nhau\nHạnh phúc vun đắp ai kia\nLối đi đến nơi nào cho chúng ta\nĐành thế thôi cứ chia tay\nDù biết sẽ tốt cho nhau\nBước cứ bước em về với người\nLòng vẫn không nói nên câu\nRằng trái tim vẫn yêu em\nChẳng thể sống bên người như lúc xưa\nĐêm chia ly mưa buồn rơi héo hắt\nBước chân anh trên đường khuya hoang vắng\nBao yêu thương nơi này ta đã có\nChính nơi đây chúng ta xa rời nhau\nKhi yêu nhau bây giờ anh mới biết\nTrái tim em không còn như lúc trước\nSau đêm nay hai đường hai lối bước\nĐường đi mới sẽ vắng bóng em bên đời anh\nLần cuối ta nắm tay nhau\nThì hãy nói hết đi em\nNhững năm tháng yêu nhau giả vờ\nMình cứ cố gắng bên nhau\nHạnh phúc vun đắp ai kia\nLối đi đến nơi nào cho chúng ta\nĐành thế thôi cứ chia tay\nDù biết sẽ tốt cho nhau\nBước cứ bước em về với người\nLòng vẫn không nói nên câu\nRằng trái tim vẫn yêu em\nChẳng thể sống bên người như lúc xưa\nLần cuối ta nắm tay nhau\nThì hãy nói hết đi anh\nNhững năm tháng yêu nhau giả vờ\nMình cứ cố gắng bên nhau\nHạnh phúc vun đắp ai kia\nLối đi đến nơi nào cho chúng ta\nĐành thế thôi cứ chia tay\nDù biết sẽ tốt cho nhau\nBước cứ bước em về với người\nLòng vẫn không nói nên câu\nRằng trái tim vẫn yêu em\nChẳng thể sống bên người như lúc xưa\nLòng vẫn không nói nên câu\nRằng trái tim vẫn yêu em\nChẳng thể sống bên người như lúc xưa\n"]
    },
    {
      name: "Thương em là điều anh không thể ngờ",
      singer: "Noo Phước Thịnh",
      path: "./assets/songs/thuongemladieuanhkhongthengo.mp3",
      image: "./assets/img/thuongemladieuanhkhongthengo.jpg",
      lyrics:["Yêu em, dù là đơn phương thế thôi\nSao chẳng thể nói ra trước đôi môi kia\nThương em, là điều anh không thể ngờ\nNgăn nỗi nhớ cũng không thể ngăn trái tim\nNgần ngại chôn sâu yêu thương\nAnh giấu đi tâm sự mỗi khi bên cạnh nhau\nChỉ biết lặng thinh ngắm nhìn\nMột ngôi sao nhỏ bé làm tim anh mãi mong chờ\nLàanh cố chấp yêu em\nDù không thể nói thành lời\nVì dại khờ anh thu mình trong suy tư của em\nDù muộn sầu hay thương nhớ anh xin một mình mang hết\nChỉmong bờ mi em không vương chút buồn\nVà nụ cười em luôn trên bờ môi\nThương em, là điều anh không thể ngờ\nNgăn nỗi nhớ cũng không thể ngăn trái tim\nNgần ngại chôn sâu yêu thương\nAnh giấu đi tâm sự mỗi khi bên cạnh nhau\nChỉ biết lặng thinh ngắm nhìn\nMột ngôi sao nhỏ bé làm tim anh mãi mãi mong chờ\nLà anh cố chấp yêu em\nDù không thể nói thành lời\nVì dại khờ anh thu mình trong suy tư của em\nDù muộn sầu hay thương nhớ anh xin một mình mang hết\nChỉ mong bờ mi em không vương chút buồn\nVà nụ cười em luôn trên bờ môi\nTrọn yêu thương này trao cho em\nTrọn tâm tư này anh giữ lấy\nSẽ bên cạnh em dẫu cho ngày mai\nNgười rời xa anh\nRời xa anh mãi\nLà anh cố chấp yêu em\Là anh cố chấp yêu em\nDù không thể nói thành lời\nVì dại khờ anh thu mình trong suy tư của em\nDù muộn sầu hay thương nhớ anh xin một mình mang hết\nChỉ mong bờ mi em không vương chút buồn\nVà nụ cười em luôn trên bờ môi\nChỉ mong bờ mi em không vương chút buồn\nVà nụ cười em luôn trên bờ môi...\n"]
    },
    {
      name: "Chạm khẽ tim anh một chút thôi",
      singer: "Noo Phước Thịnh",
      path: "./assets/songs/chamkhetimanhmotchutthoi.mp3",
      image: "./assets/img/chamkhetimanhmotchutthoi.jpg",
      lyrics:["Chạm nhẹ vào đôi mắt\nChạm nhẹ vào bờ vai\nChạm nhẹ vào đôi môi\nNgày mai xa anh rồi\nChạm nhẹ vào trí nhớ\nChạm nhẹ vào cơn mơ\nMình đã chạm khẽ vào nhau\nNhững ngày ngây thơ\nAnh yêu cô gái nhỏ bé\nTin vào những lời bài hát\nTin rằng được khóc trong mưa\nSẽ bớt đau hơn\nAnh yêu cô gái năm ấy\nTin vào những điều viển vông\nRằng tay và tay sẽ nắm lấy nhau\nTận cuối cuộc đời\nThời gian xóa đi những ngây thơ,\nNhững điều vội vàng như trong giấc mơ\nĐể lại những cơn đau vu vơ\nChẳng còn bất ngờ\nMột mai sớm kia em có thấy\nGiữa lồng ngực mình đau khi nhớ anh\nThì đừng vội khóc hay siết tay anh\nNơi em bình yên\nĐừng hôn nếu như em chưa quên\nDư vị ngọt ngào hai ta đã trao\nĐừng ôm nếu em thấy anh ta\nChẳng thể vỗ về\nĐừng tin nếu chia tay anh ta\nNói rằng mình không xứng đáng với em\nVà đừng vội khóc anh vẫn ở đây\nCho em bình yên\nChạm khẽ tim anh một chút thôi...\nMai xa rồi...\nAnh yêu cô gái nhỏ bé\nTin vào những lời bài hát\nTin rằng được khóc trong mưa\nSẽ bớt đau hơn\nAnh yêu cô gái năm ấy\nTin vào những điều viển vông\nRằng tay và tay sẽ nắm lấy nhau\nTận cuối cuộc đời\nThời gian xóa đi những ngây thơ,\nNhững điều vội vàng như trong giấc mơ\nĐể lại những cơn đau vu vơ\nChẳng còn bất ngờ\nMột mai sớm kia em có thấy\nGiữa lồng ngực mình đau khi nhớ anh\nThì đừng vội khóc hay siết tay anh\nNơi em bình yên\nĐừng hôn nếu như em chưa quên\nDư vị ngọt ngào hai ta đã trao\nĐừng ôm nếu em thấy anh ta\nChẳng thể vỗ về\nĐừng tin nếu chia tay anh ta\nNói rằng mình không xứng đáng với em\nVà đừng vội khóc anh vẫn ở đây\nCho em bình yên\nThời gian xóa đi những ngây thơ,\nNhững điều vội vàng như trong giấc mơ\nĐể lại những cơn đau vu vơ\nChẳng còn bất ngờ\nMột mai sớm kia em có thấy\nGiữa lồng ngực mình đau khi nhớ anh\nThì đừng vội khóc hay siết tay anh\nNơi em bình yên\nĐừng hôn nếu như em chưa quên\nDư vị ngọt ngào hai ta đã trao\nĐừng ôm nếu em thấy anh ta\nChẳng thể vỗ về\nĐừng tin nếu chia tay anh ta\nNói rằng mình không xứng đáng với em\nVà đừng vội khóc anh vẫn ở đây\nCho em bình yên\nChạm khẽ tim anh một chút thôi...\nMai xa rồi...\n"]
    },
    {
        name: "Chắc ai đó sẽ về",
        singer: "Sơn Tùng M-TP",
        path: "./assets/songs/chacaidoseve.mp3",
        image: "./assets/img/chacaidoseve.jpg",
        lyrics:["Anh tìm nỗi nhớ anh tìm quá khứ\nNhớ lắm kí ức anh và em\nTrả lại anh yêu thương ấy\nXin người hãy về nơi đây\nBàn tay yếu ớt cố níu em ở lại\nNhững giọt nước mắt lăn dài trên mi\nCứ thế anh biết phải làm sao\nTình yêu trong em đã mất\nPhai dần đi theo gió bay\nCòn lại chi nơi đây cô đơn riêng anh\nEm đi xa quá em đi xa anh quá\nCó biết không nơi đây\nAnh vẫn đứng đợi một giấc mơ\nAnh chờ đợi một cơn mưa\nSẽ xóa sạch giọt nước mắt\nNgồi trong đêm bơ vơ\nAnh thấy đau em có biết không\nEm ơi anh nhớ em ơi anh rất nhớ\nTừng câu nói ánh mắt của em\nGiờ này ở nơi đâu\nChắc ai đó sẽ sớm quay lại thôi\nChắc ai đó sẽ sớm quay về thôi\nCầm bông hoa trên tay nước mắt rơi\nAnh nhớ em ôi\nNhững giọt nước mắt (nước mắt)\nLăn dài trên mi (trên mi)\nCứ thế anh biết phải làm sao\nTình yêu trong em đã mất\nPhai dần đi theo gió bay\nCòn lại chi nơi đây cô đơn riêng anh\nEm đi xa quá em đi xa anh quá\nCó biết không nơi đây\nAnh vẫn đứng đợi một giấc mơ\nAnh chờ đợi một cơn mưa\nSẽ xóa sạch giọt nước mắt\nNgồi trong đêm bơ vơ\nAnh thấy đau em có biết không\nEm ơi anh nhớ em ơi anh rất nhớ\nTừng câu nói ánh mắt của em\nGiờ này ở nơi đâu\nChắc ai đó sẽ sớm quay lại thôi\nChắc ai đó sẽ sớm quay về thôi\nCầm bông hoa trên tay nước mắt rơi\nAnh nhớ em\nEh\nAnh sẽ mãi nhớ thật nhiều những thứ thuộc về em\nTrong tim này vẫn mãi yêu người riêng em\nOh\nEm đi xa quá em đi xa anh quá\nCó biết không nơi đây\nAnh vẫn đứng đợi một giấc mơ\nAnh chờ đợi một cơn mưa\nSẽ xóa sạch giọt nước mắt\nNgồi trong đêm bơ vơ\nAnh thấy đau em có biết không\nEm ơi anh nhớ\nEm ơi anh rất nhớ (rất nhớ em)\nTừng câu nói ánh mắt của em\nGiờ này ở nơi đâu\nChắc ai đó sẽ sớm quay lại thôi\nChắc ai đó sẽ sớm quay về thôi\nCầm bông hoa trên tay nước mắt rơi\nAnh nhớ em\n"]
    },
    {
        name: "Chúng ta không thuộc về nhau",
        singer: "Sơn Tùng M-TP",
        path: "./assets/songs/chungtakhongthuocvenhau.mp3",
        image: "./assets/img/chungtakhongthuocvenhau.jpg",
        lyrics:["Về, về, về nơi này\nChúng ta không thuộc về nhau\nChúng ta không thuộc về\nVề, về, về nơi này\nNiềm tin đã mất\nGiọt nước mắt cuốn kí ức anh chìm sâu \nTình về nơi đâu\nCô đơn đôi chân lạc trôi giữa bầu trời\nMàn đêm che dấu\nTừng góc tối khuất lấp phía sau bờ môi\nTại vì anh thôi\nYêu say mê nên đôi khi quá dại khờ\nNhắm mắt ơ thờ anh không muốn lạc vào trong nỗi đau này\nPhía trước bây giờ ai đang nắm chặt bàn tay của em vậy?\nMông lung như một trò đùa\nAnh xin giơ tay rút lui thôi (do ai)\nTrách ai bây giờ đây, hú-ú-ù-u-ù\nChúng ta không thuộc về nhau\nChúng ta không thuộc về nhau\nChúng ta không thuộc về nhau\nEm hãy cứ đi bên người mà em cần\nTrái tim không thuộc về nhau\nGiấc mơ không là của nhau\nXóa câu ca buồn chiều mưa\nAnh lỡ xóa luôn yêu thương ngày xưa rồi \nChúng ta không thuộc về nhau\nChúng ta không thuộc về (về, về, về nơi này)\nChúng ta không thuộc về nhau\nChúng ta không thuộc về (về, về, về nơi này)\nHey, từng đêm qua (từng đêm qua)\nCơn mưa bao vây chia rời đôi ta (rời đôi ta)\nEm ngày hôm qua (ngày hôm qua)\nCuốn gió theo mây đi về nơi xa (về nơi xa)\nTrời xanh rộng bao la, anh lê đôi chân mình\nBơ vơ lang thang có lẽ em đang yên vui bên nhân tình\nQuên đi để anh nhớ, hơi men để anh mơ\nNơi đâu để anh giấu một nỗi buồn vào trong thơ\nNhắm mắt ơ thờ anh không muốn lạc vào trong nỗi đau này\nPhía trước bây giờ ai đang nắm chặt bàn tay của em vậy?\nMông lung như một trò đùa\nAnh xin giơ tay rút lui thôi (do ai)\nTrách ai bây giờ đây, hú-ú-ù-u-ù\nChúng ta không thuộc về nhau\nChúng ta không thuộc về nhau \nChúng ta không thuộc về nhau\nEm hãy cứ đi bên người mà em cần\nTrái tim không thuộc về nhau\nGiấc mơ không là của nhau\nXóa câu ca buồn chiều mư \nAnh lỡ xóa luôn yêu thương ngày xưa rồi\nChúng ta không thuộc về nhau\nChúng ta không thuộc về (về, về, về nơi này)\nChúng ta không thuộc về nhau\nChúng ta không thuộc về (về, về, về nơi này)\nChúng ta không thuộc về nhau\nKhông thuộc về nhau\nKhông thuộc về nhau, oh\nChúng ta không thuộc về nhau\nKhông thuộc về nhau\nKhông thuộc về nhau, ah-ha\nChúng ta không thuộc về nhau\nChúng ta không thuộc về nhau\nChúng ta không thuộc về nhau\nEm hãy cứ đi bên người mà em cần\nTrái tim không thuộc về nhau\nGiấc mơ không là của nhau\nXoá câu ca buồn chiều mưa\nAnh lỡ xoá luôn yêu thương ngày xưa rồi\nChúng ta không thuộc về nhau (goodbye forever oh)\nChúng ta không thuộc về nhau (oh)\nChúng ta không thuộc về nhau ah (goodbye forever oh)\nChúng ta không thuộc về nha "]
    },
    {
        name: "Hãy trao cho anh",
        singer: "Sơn Tùng M-TP x Snoop Dog",
        path: "./assets/songs/haytraochoanh.mp3",
        image: "./assets/img/haytraochoanh.jpg",
        lyrics:["Lala lala lala\nHình bóng ai đó nhẹ nhàng vụt qua nơi đây\nQuyến rũ ngây ngất loạn nhịp làm tim mê say\nCuốn lấy áng mây theo cơn sóng xô dập dìu\nNụ cười ngọt ngào cho ta tan vào phút giây miên man quên hết con đường về eh\nLet me know your name\nChẳng thể tìm thấy lối về eh\nLet me know your name\nĐiệu nhạc hòa quyện trong ánh mắt đôi môi\nDẫn lối những bối rối rung động khẽ lên ngôi\nVà rồi khẽ và rồi khẽ khẽ\nChạm nhau mang vô vàn đắm đuối vấn vương dâng tràn\nLấp kín chốn nhân gian làn gió hoá sắc hương mơ màng\nMột giây ngang qua đời cất tiếng nói không nên lời\nẤm áp đến trao tay ngàn sao trời thêm chơi vơi\nDịu êm không gian bừng sáng đánh thức muôn hoa mừng\nQuấn quít hát ngân nga từng chút níu bước chân em dừng\nBao ý thơ tương tư ngẩn ngơ (la la la)\nLưu dấu nơi mê cung đẹp thẫn thờ\nOh oh oh oh uh\nHãy trao cho anh hãy trao cho anh\nHãy trao cho anh thứ anh đang mong chờ (oh oh oh oh)\nHãy trao cho anh hãy trao cho anh\nHãy mau làm điều ta muốn vào khoảnh khắc này đê (oh oh oh oh)\nHãy trao cho anh đê hãy trao cho anh đê\nHãy trao anh trao cho anh đi những yêu thương nồng cháy (chỉ mình anh thôi)\nTrao anh ái ân nguyên vẹn đong đầy\nLala lala\nLala lala\nLala lala\nLala lala\nLooking at my Gucci is about that time\nWe can smoke a blunt and pop a bottle of wine\nNow get yourself together and be ready by nine\nCuz we gon' do some things that will shatter your spine\nCome one undone Snoop Dogg Son Tung\nLong Beach is the city that I come from\nSo if you want some get some\nBetter enough take some take some\nChạmnhau mang vô vàn đắm đuối vấn vương dâng tràn\nLấp kín chốn nhân gian làn gió hóa sắc hương mơ màng\nMột giây ngang qua đời cất tiếng nói không nên lời\nẤm áp đến trao tay ngàn sao trời lòng càng thêm chơi vơi\nDịu êm không gian bừng sáng đánh thức muôn hoa mừng\nQuấn quít hát ngân nga từng chút níu bước chân em dừng\nBao ý thơ tương tư ngẩn ngơ (la la la)\nLưu dấu nơi mê cung đẹp thẫn thờ\nOh oh oh oh uh\nHãy trao cho anh hãy trao cho anh\nHãy trao cho anh thứ anh đang mong chờ (oh oh oh oh)\nHãy trao cho anh hãy trao cho anh\nHãy mau làm điều ta muốn vào khoảnh khắc này đê (oh oh oh oh)\nHãy trao cho anh đê hãy trao cho anh đê\nHãy trao anh trao cho anh đi những yêu thương nồng cháy (chỉ mình anh thôi)"]
    }
  ],
  setConfig: function (key, value) {
    this.config[key] = value;
  
  },
  render: function () {
    const htmls = this.songs.map((song, index) => {
      return `
                        <div class="song ${
                          index === this.currentIndex ? "active" : ""
                        }" data-index="${index}">
                            <div class="thumb"
                                style="background-image: url(${song.image})">
                            </div>
                            <div class="body">
                                <h2 class="title">${song.name}</h2>
                                <p class="author">${song.singer}</p>
                            </div>
                            <div class="option">
                                <i class="fas fa-ellipsis-h"></i>
                            </div>
                        </div>
                    `;
    });
    playlist.innerHTML = htmls.join("");
  },
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      }
    });
  },
  handleEvents: function () {
    const _this = this;
    const cdWidth = cd.offsetWidth;

    const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000, // 10 seconds
      iterations: Infinity
    });
    cdThumbAnimate.pause();

    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop;

      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    };

    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };

    audio.onplay = function () {
      _this.isPlaying = true;
      player.classList.add("playing");
      cdThumbAnimate.play();
    };

    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove("playing");
      cdThumbAnimate.pause();
    };

    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = progressPercent;
      }
    };

    progress.onchange = function (e) {
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
    };

    nextBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.nextSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    prevBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.prevSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    randomBtn.onclick = function (e) {
      _this.isRandom = !_this.isRandom;
      _this.setConfig("isRandom", _this.isRandom);
      randomBtn.classList.toggle("active", _this.isRandom);
    };

    repeatBtn.onclick = function (e) {
      _this.isRepeat = !_this.isRepeat;
      _this.setConfig("isRepeat", _this.isRepeat);
      repeatBtn.classList.toggle("active", _this.isRepeat);
    };

    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    };

    playlist.onclick = function (e) {
      const songNode = e.target.closest(".song:not(.active)");

      if (songNode || e.target.closest(".option")) {

        if (songNode) {
          _this.currentIndex = Number(songNode.dataset.index);
          _this.loadCurrentSong();
          _this.render();
          audio.play();
        }

        if (e.target.closest(".option")) {
        }
      }
    };
  },
  scrollToActiveSong: function () {
    setTimeout(() => {
      $(".song.active").scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, 300);
  },
  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url(${this.currentSong.image})`;
    audio.src = this.currentSong.path;
    listLyrics = this.currentSong.lyrics;
    let lyrics = listLyrics;

    const lyricsDiv = document.querySelector('.lyrics');

    function showLyrics(lyrics) {
      lyricsDiv.innerText = lyrics;
    }

    showLyrics(lyrics);
  },
  loadConfig: function () {
    this.isRandom = this.config.isRandom;
    this.isRepeat = this.config.isRepeat;
  },
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  playRandomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);

    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },
  start: function () {

    this.loadConfig();

    this.defineProperties();

    this.handleEvents();

    this.loadCurrentSong();

    this.render();

    randomBtn.classList.toggle("active", this.isRandom);
    repeatBtn.classList.toggle("active", this.isRepeat);
  }
};

app.start();








                