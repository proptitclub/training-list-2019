import React from 'react'
import Table from './Table'

const trainingList = [
  {
    A: 1,
    B: 'Đào Bích Diệp',
    C: 'D19CQCN04',
    D: 'B19DCCN112'
  },
  {
    A: 2,
    B: 'Vũ Đình Đức',
    C: 'D19CQPT01',
    D: 'B19DCPT061'
  },
  {
    A: 3,
    B: 'Trần Đăng Dũng',
    C: 'D19CQCN03',
    D: 'B19DCCN135'
  },
  {
    A: 4,
    B: 'Nguyễn Minh Quân',
    C: 'D19CQCN01',
    D: 'B19DCCN529'
  },
  {
    A: 5,
    B: 'Lê Quý Hoàng',
    C: 'D19CQCN12',
    D: 'B19DCCN276'
  },
  {
    A: 6,
    B: 'Vương Đình Doanh',
    C: 'D19CQCN09',
    D: 'B19DCCN117'
  },
  {
    A: 7,
    B: 'Đào Thanh Sơn',
    C: 'D19CQCN10',
    D: 'B19DCCN550'
  },
  {
    A: 8,
    B: 'Đỗ Thị Thu Thảo',
    C: 'D19CQAT02',
    D: 'B19DCAT182'
  },
  {
    A: 9,
    B: 'Kim Huy Hoàng',
    C: 'D19CQCN10',
    D: 'B19DCCN274'
  },
  {
    A: 10,
    B: 'Nguyễn Phương Anh',
    C: 'D19CQAT03',
    D: 'B19DCAT007'
  },
  {
    A: 11,
    B: 'Ngô Văn Quyết',
    C: 'D19CQCN03',
    D: 'B19DCCN543'
  },
  {
    A: 12,
    B: 'Nguyễn Văn Lực',
    C: 'D19CQCN12',
    D: 'B19DCCN408'
  },
  {
    A: 13,
    B: 'Kiều Đức Long',
    C: 'D19CQCN05',
    D: 'B19DCCN389'
  },
  {
    A: 14,
    B: 'Bùi Quang Dương',
    C: 'D19CQAT03',
    D: 'B19DCAT031'
  },
  {
    A: 15,
    B: 'Nguyễn Thị Quỳnh Trang',
    C: 'D19CQCN06',
    D: 'B19DCCN686'
  },
  {
    A: 16,
    B: 'Nguyễn Minh Phương',
    C: 'D19CQAT01',
    D: 'B19DCAT141'
  },
  {
    A: 17,
    B: 'Đàm Xuân Ninh',
    C: 'D19CQPT04',
    D: 'B19DCPT169'
  },
  {
    A: 18,
    B: 'Nguyễn Thị Quỳnh Mai',
    C: 'D19CQAT02',
    D: 'B19DCAT122'
  },
  {
    A: 19,
    B: 'Nguyễn Thị Huyền Trang',
    C: 'D19CQCN05',
    D: 'B19DCCN685'
  },
  {
    A: 20,
    B: 'Tưởng Quốc Trung',
    C: 'D19CQAT03',
    D: 'B19DCAT199'
  },
  {
    A: 21,
    B: 'Nguyễn Ngọc Ánh',
    C: 'D19CQCN04',
    D: 'B19DCCN052'
  },
  {
    A: 22,
    B: 'Đặng Công Danh',
    C: 'D19CQCN12',
    D: 'B19DCCN108'
  },
  {
    A: 23,
    B: 'Hoàng Đức Minh',
    C: 'D19CQCN08',
    D: 'B19DCCN428'
  },
  {
    A: 24,
    B: 'Lê Thanh Bình',
    C: 'D19CQCN07',
    D: 'B19DCCN067'
  },
  {
    A: 25,
    B: 'Đặng Thị Hồng Gấm',
    C: 'D19CQAT03',
    D: 'B19DCAT051'
  },
  {
    A: 26,
    B: 'Nguyễn Quang Linh',
    C: 'D19CQAT04',
    D: 'B19DCAT112'
  },
  {
    A: 27,
    B: 'Đỗ Như Đức',
    C: 'D19CQCN09',
    D: 'B19DCCN189'
  },
  {
    A: 28,
    B: 'Trương Nguyễn Trường Giang',
    C: 'D19CQDT02',
    D: 'B19DCDT066'
  },
  {
    A: 29,
    B: 'Nguyễn Mạnh Tuân',
    C: 'D19CQCN03',
    D: 'B19DCCN603'
  },
  {
    A: 30,
    B: 'Đinh Thị Minh Phương',
    C: 'D19CQAT03',
    D: 'B19DCAT139'
  },
  {
    A: 31,
    B: 'Bùi Văn Cường',
    C: 'D19CQVT02',
    D: 'B19DCVT034'
  },
  {
    A: 32,
    B: 'Chu Xuân Thịnh',
    C: 'D19CQCN04',
    D: 'B19DCCN673'
  },
  {
    A: 33,
    B: 'Luyện Thị Ánh Nguyệt',
    C: 'D19CQDT02',
    D: 'B19DCDT162'
  },
  {
    A: 34,
    B: 'Bùi Quang Trường',
    C: 'D19CQCN10',
    D: 'B19DCCN701'
  },
  {
    A: 35,
    B: 'Phan Trung Hưng',
    C: 'D19CQCN06',
    D: 'B19DCCN330'
  },
  {
    A: 36,
    B: 'Nguyễn Duy Dũng',
    C: 'D19CQCN04',
    D: 'B19DCCN124'
  },
  {
    A: 37,
    B: 'Phạm Thị Nga',
    C: 'D19CQCN04',
    D: 'B19DCCN460'
  },
  {
    A: 38,
    B: 'Dương Văn Giang',
    C: 'D19CQCN12',
    D: 'B19DCCN204'
  },
  {
    A: 39,
    B: 'Tạ Mạnh Thức',
    C: 'D19CQCN12',
    D: 'B19DCCN681'
  },
  {
    A: 40,
    B: 'Hoàng Tuấn Hưng',
    C: 'D19CQCN03',
    D: 'B19DCCN327'
  },
  {
    A: 41,
    B: 'Trần Thị Huế',
    C: 'D19CQCN02',
    D: 'B19DCCN290'
  },
  {
    A: 42,
    B: 'Phan Quang Huy',
    C: 'D19CQCN09',
    D: 'B19DCCN321'
  },
  {
    A: 43,
    B: 'Nguyễn Văn Hậu',
    C: 'D19CQCN02',
    D: 'B19CDCN230'
  },
  {
    A: 44,
    B: 'Trần Trung Nam',
    C: 'D19CQCN12',
    D: 'B19DCCN456'
  },
  {
    A: 45,
    B: 'Nguyễn Tiến Dũng',
    C: 'D19CQCN06',
    D: 'B19DCCN126'
  },
  {
    A: 46,
    B: 'Phạm Trung Huy',
    C: 'D19CQCN05',
    D: 'B19DCCN317'
  },
  {
    A: 47,
    B: 'Phạm Kim Oanh',
    C: 'D19CQCN03',
    D: 'B19DCCN495'
  },
  {
    A: 48,
    B: 'Lại Quang Chính',
    C: 'D19CQAT03',
    D: 'B19DCAT023'
  },
  {
    A: 49,
    B: 'Phạm Xuân Huy',
    C: 'D19CQCN07',
    D: 'B19DCCN319'
  },
  {
    A: 50,
    B: 'Cồ Thị Phương Hoa',
    C: 'D19CQCN11',
    D: 'B19DCCN263'
  },
  {
    A: 51,
    B: 'Nông Thị Thùy Dung',
    C: 'D19CQCN11',
    D: 'B19DCCN119'
  },
  {
    A: 52,
    B: 'Trần Thị Ngọc Hoài',
    C: 'D19CQCN04',
    D: 'B19DCCN268'
  },
  {
    A: 53,
    B: 'Vũ Tiến Đức',
    C: 'D19CQAT02',
    D: 'B19DCAT050'
  },
  {
    A: 54,
    B: 'Trần Thị Hằng',
    C: 'D19CQCN10',
    D: 'B19DCCN226'
  },
  {
    A: 55,
    B: 'Lê Hồng Dương',
    C: 'D19CQCN06',
    D: 'B19DCCN150'
  },
  {
    A: 56,
    B: 'Phạm Thị Thanh Hảo',
    C: 'D19CQCN08',
    D: 'B19DCCN224'
  },
  {
    A: 57,
    B: 'Phan Hoàng Nguyên',
    C: 'D19CQCN12',
    D: 'B19DCCN480'
  },
  {
    A: 58,
    B: 'Nguyễn Thị Uyên',
    C: 'D19CQCN07',
    D: 'B19DCCN709'
  },
  {
    A: 59,
    B: 'Nguyễn Dương Kỳ Anh',
    C: 'D19CQCN09',
    D: 'B19DCCN021'
  },
  {
    A: 60,
    B: 'Lê Xuân Minh',
    C: 'D19CQCN11',
    D: 'B19DCCN431'
  },
  {
    A: 61,
    B: 'Phạm Thị Kiều Oanh',
    C: 'D19CQAT02',
    D: 'B19DCAT134'
  }
]

const Body = () => {
  return (
    <div class='limiter'>
      <div class='container-table100'>
        <div class='wrap-table100'>
          <Table trainingList={trainingList} />
        </div>
      </div>
    </div>
  )
}

export default Body
