export const FIRST_PLAN = {
  title: 'Đà Lạt Và Những Chuyến Đi Nha',
  startDate: new Date(2022, 4, 22),
  endDate: new Date(2022, 4, 24),
  location: 'Đà Lạt, Lâm Đồng',
  planDescription:
    'Đà Lạt, the capital of Lâm Đồng Province in southern Vietnam’s Central Highlands, is centered around a lake and golf course, and surrounded by hills, pine forests, and waterfalls.',
  schedule: [
    [
      {
        name: 'Thác Datanla 1',
        placeDescription:
          'Thác Datanla với độ cao cao hơn 20m. Vị trí nằm giữa đèo Prenn và ở thượng nguồn nên dòng chảy của thác rất ổn định. Và nước trong hồ thì êm đềm quanh năm.',
        placeLocation: 'Quốc lộ 20, Đèo Prenn, P. 3, TP. Đà Lạt',
        phoneNumber: '0912456783',
        rating: '4.24/5',
        openingTime: {
          start: new Date(),
          end: new Date(),
        },
        planningTime: {
          start: new Date(),
          end: new Date(),
        },
        notes: ['Note 1', 'Note 2'],
      },
    ],
    [
      {
        name: 'Thác Datanla 2',
        placeDescription:
          'Thác Datanla với độ cao cao hơn 20m. Vị trí nằm giữa đèo Prenn và ở thượng nguồn nên dòng chảy của thác rất ổn định. Và nước trong hồ thì êm đềm quanh năm.',
        placeLocation: 'Quốc lộ 20, Đèo Prenn, P. 3, TP. Đà Lạt',
        phoneNumber: '0912456783',
        rating: '4.24/5',
        openingTime: {
          start: new Date(),
          end: new Date(),
        },
        planningTime: {
          start: new Date(),
          end: new Date(),
        },
        notes: ['Note 1', 'Note 2'],
      },
    ],
  ],
};

export const EXAMPLES = [
  {
    title: "Vũng Tàu Let's go",
    startDate: new Date('2023-06-15T00:00:00-07:00'),
    endDate: new Date('2023-06-16T00:00:00-07:00'),
    location: 'Bà Rịa - Vũng Tàu',
    schedule: [
      [
        {
          name: 'Tượng Chúa dang tay',
          placeDescription:
            'Tượng Chúa dang tay nằm trên đỉnh Núi Nhỏ hay còn gọi là núi Tao Phùng, ở độ cao 136 mét so với mực nước biển, thuộc phường 2, thành phố Vũng Tàu, tỉnh Bà Rịa – Vũng Tàu. Với chiều cao bức tượng lên đến 32 mét, phần cánh tay dang rộng tới 18,4 mét.',
          placeLocation: 'Phường 2, Vũng Tàu, Bà Rịa - Vũng Tàu',
          phoneNumber: null,
          rating: null,
          openingTime: {
            open: null,
            close: null,
          },
          planningTime: {
            startTime: new Date('2023-06-15T09:00:00+07:00'),
            endTime: new Date('2023-06-15T11:00:00+07:00'),
          },
          imageUrl:
            'https://media.mia.vn/uploads/blog-du-lich/tuong-chua-kito-vung-tau-tuong-chua-jesus-lon-nhat-chau-a-1633941577.jpg',
        },
        {
          name: 'Lẩu cá đuối cô Hồng',
          placeDescription:
            'Một quán lẩu bán theo hệ “ hệ gia đình qua năm tháng”… không phô trương, cầu kỳ, rất mộc mạc và giản dị như cô chú chủ quán vậy.',
          placeLocation:
            '18 Hùng Vương, Phường 4, Thành phố Vũng Tầu, Bà Rịa - Vũng Tàu',
          phoneNumber: '0254 3541 657',
          rating: '4.0/5.0 (263)',
          openingTime: {
            open: new Date('2023-06-15T10:00:00+07:00'),
            close: new Date('2023-06-15T22:30:00+07:00'),
          },
          planningTime: {
            startTime: new Date('2023-06-15T11:00:00+07:00'),
            endTime: new Date('2023-06-15T12:00:00+07:00'),
          },
          notes: ['1 lẩu cá đuối nhỏ cho 2 người ăn là 170.000đ/lẩu'],
        },
      ],
      [
        {
          name: 'Bảo tàng Bà Rịa – Vũng Tàu',
          placeDescription:
            'Tọa lạc ở vị trí vô cùng thuận lợi ngay tại Bãi Trước, bảo tàng tỉnh Bà Rịa – Vũng Tàu hiện lưu giữ và tổng hợp nhiều tư liệu lịch sử quý giá, các giai đoạn hình thành và phát triển của địa phương cùng hơn 28.000 tài liệu, hiện vật và tư liệu lịch sử, văn hóa, nghệ thuật.',
          placeLocation:
            '4 Trần Phú, Phường 1, Thành phố Vũng Tầu, Bà Rịa - Vũng Tàu',
          phoneNumber: '0254 3852 421',
          rating: '4.5/5.0 (722)',
          openingTime: {
            open: new Date('2023-06-16T08:00:00+07:00'),
            close: new Date('2023-06-16T16:30:00+07:00'),
          },
          planningTime: {
            startTime: new Date('2023-06-16T09:00:00+07:00'),
            endTime: new Date('2023-06-16T11:00:00+07:00'),
          },
          notes: [],
        },
      ],
    ],
  },
];

export const POPULAR = [
  {
    name: 'Phố cổ Hà Nội',
    place: 'Hà Nội',
    description:
      'Hà Nội, thủ đô của Việt Nam, nổi tiếng với kiến trúc trăm tuổi và nền văn hóa phong phú với sự ảnh hưởng của khu vực Đông Nam Á, Trung Quốc và Pháp. Trung tâm thành phố là Khu phố cổ nhộn nhịp, nơi các con phố hẹp được mang tên "hàng".',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Ph%E1%BB%91_T%E1%BA%A1_Hi%E1%BB%87n_-_NKS.jpg/1200px-Ph%E1%BB%91_T%E1%BA%A1_Hi%E1%BB%87n_-_NKS.jpg',
  },
  {
    name: 'Hội An',
    place: 'Quảng Nam',
    description:
      'Khu đô thị cổ Hội An nằm gần cửa sông Thu Bồn, con sông lớn nhất của tỉnh Quảng Nam. Mặc dù vậy, ngày nay từ trung tâm thành phố tới đến cửa sông cũng không còn gần lắm. Hạ lưu sông Thu Bồn khi đổ ra biển Đông được chia thành nhiều nhánh.',
    imageUrl:
      'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/hoi-an-quang-nam-vntrip-1.jpg',
  },
];

export const MAYBE_YOU_LIKE = [
  {
    name: 'Bán đảo Sơn Trà',
    place: 'Đà Nẵng',
    description:
      'Bán đảo Sơn Trà, nằm trong vùng khí hậu mát mẻ trong lành, có cảnh quan thiên nhiên tuyệt đẹp, lâu nay đã là một trong những điểm đến hấp dẫn nhất của Đà Nẵng. Có nhiều điểm dừng chân thu hút du khách như đỉnh Bàn Cờ, Chùa Linh Ứng, Cây đa di sản....',
    imageUrl:
      'https://dulichannam.com/wp-content/uploads/2018/07/chua-linh-ung-tu-tren-cao-dulichannam.jpg',
  },
  {
    name: 'Fansipan',
    place: 'Lai Châu',
    description:
      'Fansipan (còn được viết là Phan Si Păng hay Phan Xi Păng) là đỉnh núi cao nhất của Việt Nam, nằm trên dãy núi Hoàng Liên Sơn ở vùng Tây Bắc Bộ Việt Nam. Fansipan là đỉnh núi cao nhất của bán đảo Đông Dương và được mệnh danh là "Nóc nhà Đông Dương".',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/d/de/C%C3%A1p-treo-fansipan-17.jpg',
  },
];

export const POSTS = [
  {
    originalPoster: 'Ngoc Phung Le',
    time: '1 ngày trước',
    avatarUrl:
      'https://scontent-kul2-1.xx.fbcdn.net/v/t1.18169-9/21731220_2084147481806854_4483570641495226130_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=WO6fWKT0VJsAX8OlBXb&_nc_ht=scontent-kul2-1.xx&oh=00_AfA8NwcS8RC8SiNAJLuUXTzOJlcX7KOZxqeNU7MWfL4Qvw&oe=64AB7765',
    caption: 'Đi Đà Nẵng đi bà con ơi 😂',
    plan: {
      title: 'Xách balô đến Đà Nẵng',
      startDate: '2023-06-20T00:00:00+07:00',
      endDate: '2023-06-22T00:00:00+07:00',
      location: 'Đà Nẵng',
      planDescription:
        'Được mệnh danh là một trong những thành phố đáng sống nhất Việt Nam, Đà Nẵng hứa hẹn sẽ là một điểm đến mà bạn không thể nào bỏ qua. Với vị trí địa lý đắc địa nằm giữa đất nước, nơi có sự kết hợp tuyệt vời giữa nét đẹp tự nhiên và văn hóa đa dạng. Đà Nẵng được hứa hẹn là một nơi “check-in” hoàn hảo cho các tín đồ yêu thích du lịch.',
      imageUrl:
        'https://cdnimg.vietnamplus.vn/uploaded/mzdic/2023_05_03/ttxvn_da_nang_hut_khach_du_lich_dip_le_304__15_03.jpg',
      schedule: [
        [
          {
            name: 'Mì Quảng Bà Mua',
            description:
              'Nếu ai đã từng đến Đà Nẵng hẳn lẽ sẽ không thể nào quên được hương vị của món mì bình dị, dân dã nhưng cũng rất mực đặc trưng của vùng đất này. Bởi thế cho nên mì Quảng được coi như là linh hồn của vùng đất “gió lào cát trắng, nắng cháy mưa dầm” này.',
            location:
              '95A Nguyễn Tri Phương, P. Thạc Gián,  Quận Thanh Khê, Đà Nẵng',
            phoneNumber: '0783 555 556',
            imageUrl:
              'http://myquangbamua.vn/thumb/805x570/1/upload/hinhanh/971291641145526.jpg',
            rating: '4.4/5.0 (155)',
            openingTime: {
              open: '2023-06-20T06:30:00+07:00',
              close: '2023-06-20T21:00:00+07:00',
            },
            planningTime: {
              startTime: null,
              endTime: null,
            },
          },
          {
            name: 'Fantasy Park',
            description:
              'Fantasy Park là khu vui chơi trong nhà duy nhất ở nước ta và trên thế giới, tọa lạc trên núi. Fantasy Park nằm trong khuôn viên của khu du lịch Bà Nà Hills, với diện tích là 21.000m2. Đến với khu du lịch này bạn sẽ có những giây phút trải nghiệm đáng nhớ và mới lạ cùng người thân yêu, bạn bè.',
            location: 'Làng An Sơn, Quận Hoà Vang, Thành phố Đà Nẵng',
            phoneNumber: null,
            imageUrl:
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/89/85/01/fantasy-park.jpg?w=1200&h=-1&s=1',
            rating: '4.4/5.0 (543)',
            openingTime: {
              open: '2023-06-20T08:00:00+07:00',
              close: '2023-06-20T19:00:00+07:00',
            },
            planningTime: {
              startTime: null,
              endTime: null,
            },
          },
        ],
        [
          {
            name: 'Hải đăng Sơn Trà',
            description:
              'Hải đăng Tiên Sa có chiều cao 15,6m và tầm nhìn 14 hải lý. Từ đây, bạn có thể thu trọn vào tầm mắt cảnh quan hùng vĩ của biển cả và nhịp sống sôi động của thành phố Đà Nẵng bên dòng sông Hàn thơ mộng.',
            location: 'Bán đảo Sơn Trà, Quận Sơn Trà, Thành phố Đà Nẵng',
            phoneNumber: null,
            imageUrl:
              'https://statics.vinpearl.com/hai-dang-tien-sa-1_1634823446.jpg',
            rating: '4.5/5.0 (322)',
            openingTime: {
              open: '2023-06-20T08:00:00+07:00',
              close: '2023-06-20T21:00:00+07:00',
            },
            planningTime: {
              startTime: null,
              endTime: null,
            },
          },
        ],
        [
          {
            name: 'Chợ Cồn',
            description:
              'Chợ Cồn Đà Nẵng là một địa điểm nổi tiếng của xứ sở miền trung, nơi đây có bán rất nhiều mặt hàng mà đặc biệt là các món đặc sản Đà Nẵng ngon với giá rất bình dân.',
            location: '290 Hùng Vương, phường Vĩnh Trung, quận Hải Châu, thành phố Đà Nẵng',
            phoneNumber: null,
            imageUrl:
              'https://statics.vinpearl.com/cho%20con%20da%20nang%20thumb.jpg',
            rating: null,
            openingTime: {
              open: '2023-06-20T06:00:00+07:00',
              close: '2023-06-20T22:00:00+07:00',
            },
            planningTime: {
              startTime: null,
              endTime: null,
            },
          }
        ],
      ],
    },
    like: 10,
    comment: {
      count: 5,
      comments: [
        {
          commenter: 'Kiên Đặng',
          content: 'Thời gian này Đà Nẵng mưa nhiều ko bạn?'
        },
        {
          commenter: 'Yến Ngọc Lê',
          content: 'Bạn đi ra Đà Nẵng bằng gì á?'
        }
      ]
    }
  },
];
