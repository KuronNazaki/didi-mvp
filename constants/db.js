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
					imageUrl: 'https://media.mia.vn/uploads/blog-du-lich/tuong-chua-kito-vung-tau-tuong-chua-jesus-lon-nhat-chau-a-1633941577.jpg'
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
			]
    ],
  },
];
