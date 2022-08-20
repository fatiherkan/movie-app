import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'
import baslat from '../../src/components/Baslat_logo-full.svg'



export function FooterContainer() {
    return (
        <Footer>
            <img src={baslat} alt=""  />
            <hr style={{marginLeft:"150px",
                  
        }}/>            

            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>Hakkımızda</Footer.Title>
                    <Footer.Link href="#">Kurumsal Bilgiler</Footer.Link>
                    <Footer.Link href="#"> Kullanım Koşulları</Footer.Link>
                    <Footer.Link href="#">Üyelik Sözleşmesi</Footer.Link>
                    <Footer.Link href="#">Çerez Politikası</Footer.Link>
                    <Footer.Link href="#">KVKK ve Gizlilik Politikası</Footer.Link>
                    <Footer.Link href="#">Yardım Merkezi</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>İçerikler</Footer.Title>
                    <Footer.Link href="#">Film</Footer.Link>
                    <Footer.Link href="#">Dizi</Footer.Link>
                    <Footer.Link href="#">Kısa Kısa</Footer.Link>
                    <Footer.Link href="#">Show</Footer.Link>
                    <Footer.Link href="#">Canlı Yayınlar</Footer.Link>

                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Uygulamalar</Footer.Title>
                    <Footer.Link href="#">iPhone</Footer.Link>
                    <Footer.Link href="#">Android</Footer.Link>
                    <Footer.Link href="#">Smart TV</Footer.Link>
                    <Footer.Link href="#">Android Tablet</Footer.Link>
                    <Footer.Link href="#">Apple TV</Footer.Link>
                    <Footer.Link href="#">Android TV</Footer.Link>

                </Footer.Column>
                <Footer.Column>
                <Footer.Title>İletişim</Footer.Title>
                    <Footer.Link href="#">selam@baslat.com</Footer.Link>
                    
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}