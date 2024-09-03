import '../styles/Content.css'
import image1 from '../assets/mino.png'
import image2 from '../assets/flaminggo.png'
import image3 from '../assets/bangau.png'

function Content() {
    return (
        <>

            <div className="isi1">
                <h1>Menjadi pelopor dalam mobilitas berkelanjutan dengan menyediakan sepeda listrik inovatif yang ramah lingkungan dan memenuhi kebutuhan transportasi masyarakat modern</h1>
            </div>

            <div className="isi2"><p>
                Memimpin gerakan global untuk mengurangi jejak karbon melalui penggunaan sepeda listrik yang ramah lingkungan
            </p>
            </div>

            <div className="produk">
                <h1 className='prodh1'>PRODUK</h1>
            </div>
            <div className="tables">
                <ul>
                    <li>
                        <div className="kotak1">
                        <img src={image1} alt="" className="isikotak" />
                        <h2>Mino</h2>
                        </div>
                    </li>
                    <li>
                        <div className="kotak2">
                        <img src={image2} alt="" className="isikotak" />
                        <h2>Flaminggo</h2>
                        </div>
                    </li>
                    <li>
                        <div className="kotak3">
                        <img src={image3} alt="" className="isikotak" />
                        <h2>Bangau</h2>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Content