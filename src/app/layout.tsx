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
             <Nav></Nav>
      
         

        <div className="w-full  ">
          {children} {/* Contenu dynamique des pages */}
        </div>


        


        <Footer></Footer>





      </body>
    </html>
  );
}
