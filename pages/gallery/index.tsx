// "use client"
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import { useRef } from "react";

export default function Gallery() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const DETAIL_PHONE = process.env.NEXT_PUBLIC_DETAIL_PHONE as string

    return <div className="h-screen w-full">
        <Navbar />
        <Breadcrumbs menus={[{ title: "Home", link: "/" }, { title: "Galleries", link: "/gallery" }]} className="text-white" />

        <div className="w-full h-[100%] -mt-[10%] md:-mt-[5%] overflow-hidden -z-10 relative">
            <div className='w-full -mt-[5%] absolute top-0 left-0 bottom-0 bg-gradient-to-tr from-black to-transparent z-20' />
            <video ref={videoRef} src={"/portfolio.mp4"} autoPlay loop muted typeof="video/mp4" height="100%" width="100%" className="object-cover lg:!object-fill w-full h-screen" />
            <div className="w-[50%] absolute left-[25%] top-[30%] lg:top-[40%] z-20 text-center">
                <h4 className="text-2xl md:text-5xl text-white font-semibold">Salon terbaik di pekanbaru</h4>
                <h4 className="text-sm text-white font-semibold">Pengerjaan dikerjakan oleh professional, dan dapat kan PROMO menarik</h4>
            </div>
        </div>

        <SectionTitle title="Hasil Pengerjaan" />
        <div className="container w-[90%] lg:w-full mx-auto mt-[60px]">
            <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 height-[200px] gap-6">
                <div className="grid grid-cols-2 height-[200px]">
                    <Image src="/work/before-1.webp" width={400} height={200} alt="After 1" className="object-cover" />
                    <Image src="/work/after-1.webp" width={400} height={200} alt="After 1" className="object-cover" />
                </div>
                <div className="grid grid-cols-2">
                    <Image src="/work/before-2.webp" width={400} height={200} alt="After 1" className="object-cover" />
                    <Image src="/work/after-2.webp" width={400} height={200} alt="After 1" className="object-cover" />
                </div>
            </div>
        </div>

        <SectionTitle title="Kenapa Nano Coating" />
        <div className="container w-[90%] lg:w-full mx-auto mt-[60px]">
            <p className="text-base">
                Kenapa mobil di saran kan untuk dilapisi dengan Nano Ceramic Coating?<br />
                ✅ Melindungi cat kendaraan secara permanen hingga hitungan tahun<br />
                ✅ Mampu menahan goresan sampai dengan 80%.<br />
                ✅ Hydrophobic Effect (Efek daun talas) sehingga partikel penyebab cat kusam tidak gampang menempel.<br />
                ✅ Weetlook dan super glossy.<br /><br />

                Kenapa memilih kami:<br />
                ❗Telah berpengalaman<br />
                ❗Kualitas premium harga<br />
                medium<br />
                ❗Bergaransi 1 tahun<br />
                ❗Free antar jemput dalam kota<br /><br />

                Kita juga ada salon mobil komplit :<br />
                - Salon Body<br />
                - Salon Interior<br />
                - Salon Kaca<br />
                - Salon Mesin<br /><br />

                Untuk info lengkap dan  Book bisa ke :<br />
                99 % AYU!!! AUTO DETAILING<br />
                Jl. Darmabakti no 52 B Sigunggung Pekan baru<br /><br />

                📳 {DETAIL_PHONE.replace(",", ", ")}
            </p>
        </div>

        <Footer />
    </div>
}