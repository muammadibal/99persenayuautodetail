import CardPackage from '@/components/CardPackage';
import CardWhyUs from '@/components/CardWhyUs';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SectionContact from '@/components/SectionContact';
import SectionHero from '@/components/SectionHero';
import SectionTitle from '@/components/SectionTitle';
import { BiSolidAlarm, BiSolidCheckShield, BiSolidUser } from "react-icons/bi";

const DUMMY_REVIEW = [
  {
    id: 1,
    name: "Alan Waller",
    rate: 5,
    message: "Lorem ipsum dolor sit amet consectetur. Feugiat elementum suspendisse eu libero. Vel arcu rutrum proin egestas id."
  },
  {
    id: 2,
    name: "Alan Smith",
    rate: 4,
    message: "Lorem ipsum dolor sit amet consectetur. Feugiat elementum suspendisse eu libero. Vel arcu rutrum proin egestas id."
  },
  {
    id: 3,
    name: "Alan John",
    rate: 3,
    message: "Lorem ipsum dolor sit amet consectetur. Feugiat elementum suspendisse eu libero. Vel arcu rutrum proin egestas id."
  },
]

export default function Home() {
  const DETAIL_PHONE = process.env.NEXT_PUBLIC_DETAIL_PHONE as string

  return (
    <div>
      <Navbar />
      <main>
        <SectionHero />

        <div>
          <SectionTitle id='services' title='Layanan Kami' />

          <div className='container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[60px] mx-auto gap-8 place-items-center'>
            <CardPackage image="/polish-window.webp" title='Menghilangkan lecet dan jamur pada kaca mobil' message="Hi kak, aku mau booking jadwal salon kaca mobil nih" />
            <CardPackage image="/polish-body.webp" title='Menghilangkan lecet dan jamur pada body mobil' message="Hi kak, aku mau booking jadwal salon body mobil nih" />
            <CardPackage image="/polish-engine.webp" title='Membersihkan mesin guna mencaja agar tidak karatan dan awet' message="Hi kak, aku mau booking jadwal salon mesin mobil nih" />
            <CardPackage image="/polish-interior.webp" title='Membersihkan dashboard, cuci karpet, dan plafon' message="Hi kak, aku mau booking jadwal salon interior mobil nih" />
          </div>
        </div>
        <div>
          <SectionTitle title='Ceramic Coating' />

          <div className='container w-[90%] lg:w-full mx-auto mt-[60px]'>
            <p className='text-xl'>
              Nano ceramic coating memberikan lapisan yang lebih keras dan tebal sehingga memberikan perlindungan terhadap cat lebih lama dan kuat tidak seperti wax dan sealan yang Hanya dapat memberikan perlindungan hitungan bulan.
              <br /><br />
              Nano coating juga merupakan cairan yang dapat menyerap ke pori-pori cat sehingga menyatu begitu diaplikasikan ke permukaan dan hanya bisa hilang Mika dipoles menggunakan compound.
            </p>
          </div>
        </div>

        <div>
          <SectionTitle title='Kenapa Kami' />
          <div className='container w-[90%] lg:w-full mx-auto mt-[60px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 place-items-start'>
            <CardWhyUs icon={<BiSolidCheckShield color='#FF9900' size={150} />} title='Garansi' text='Anda tidak perlu khawatir dengan kualitas produk, karena kami menjaminnya dengan garansi resmi. Ada keluhan? Tim kami siap membantu anda' />
            <CardWhyUs icon={<BiSolidUser color='#FF9900' size={150} />} title='Teknisi Handal' text='Teknisi kami sudah mendapatkan pelatihan khusus dan sangat berpengalaman memasang produk-produk kami dengan baik dan rapih' />
            <CardWhyUs icon={<BiSolidAlarm color='#FF9900' size={150} />} title='Garansi' text='Kami pastikan teknisi kami akan datang ke tempat anda sesuai dengan waktu yang dijadwalkan' />
          </div>
        </div>

        {/* <div>
          <SectionTitle id='testimonials' title='Testimonials' />

          <div className="container w-[90%] lg:w-full mx-auto mt-[60px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 place-items-start">
            {DUMMY_REVIEW.map((item, index) => {
              return <div key={item.id}>
                <div>
                  <p>{item.name}</p>
                  <div className='flex'>
                    {Array(item.rate).fill("").map((start, index) => {
                      return <BiSolidStar key={index} color='#FF9900' />
                    })}
                  </div>
                </div>
                <p className='mt-5'>{item.message}</p>
              </div>
            })}
          </div>
        </div> */}

        <SectionContact />
      </main>

      <Footer />
    </div>
  )
}
