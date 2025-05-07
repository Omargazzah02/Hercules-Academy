import Nav from '../components/utils/Nav';
import './globals.css';
import Footer from '@/components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body >
        <div className='absolute top-0 w-full z-10'>      <Nav></Nav>
        </div>
         

        <div className="container mx-auto  ">
          {children} {/* Contenu dynamique des pages */}
        </div>


        


        <Footer></Footer>





      </body>
    </html>
  );
}
