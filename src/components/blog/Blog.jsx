import gm1 from "../../img/blog-3.jpg";
import gm2 from "../../img/blog-4.jpg";
import gm3 from "../../img/blog-6.jpg";
import "./Blog.css";

const Blog = () => {
  return (
    <>
      <section id="blog">
        <div className="blog-heading">
          <h2>My Blog</h2>
          <span>My Recent Posts</span>
        </div>
        <div className="blog-container">
          <div className="blog-box">
            <div className="blog-img">
              <img alt="blog" src={gm1} />
            </div>
            <div className="blog-text">
              <span>18 Mei 2022 / Fitur aplikasi mobile JKN</span>
              <p className="blog-title">
                Mengenal Layanan 6 Fitur Baru Aplikasi Mobile JKN
              </p>
              <p>
                Adapun cara mendaftar aplikasi Mobile JKN adalah dengan
                mengikuti langkah-langkah sebagai berikut: Unduh dan install
                aplikasi Mobile JKN melalui App Store atau Play Store. Klik
                Daftar. Klik Pendaftaran Peserta Baru. Baca syarat dan
                ketentuan, lalu pilih “Saya setuju”. Masukkan NIK KTP-el dan
                kode captcha
              </p>
              <a href="#">Read More</a>
            </div>
          </div>

          <div className="blog-box">
            <div className="blog-img">
              <img alt="blog" src={gm2} />
            </div>

            <div className="blog-text">
              <span>20 Mei 2021 / App Mobile</span>
              <p className="blog-title">
                Belajar programing di aplikasi mobile
              </p>
              <p>
                Smartphone yang kita punya tentu saja memberikan berbagai
                manfaat bagi keberlangsungan hidup setiap hari. Kita bisa
                berkomunikasi, mencari hiburan, dan juga belajar tentang hal
                apapun, salah satunya untuk belajar coding.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>

          <div className="blog-box">
            <div className="blog-img">
              <img alt="blog" src={gm3} />
            </div>

            <div className="blog-text">
              <span>20 Mei 2022 / Responsif Design</span>
              <p className="blog-title">
                Cara membuat responsif desain di berbagai defice
              </p>
              <p>
                Responsive web design atau desain web responsif adalah sebuah
                teknik atau metode bagi web designer untuk membuat suatu layout
                website yang dapat menyesuaikan diri sesuai dengan ukuran layar
                pengguna. Baik dari ukuran huruf, user interface, gambar dan
                tata letak akan menyesuaikan dengan lebar layar dan resolusi
                device yang digunakan.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
