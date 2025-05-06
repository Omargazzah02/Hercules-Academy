import Nav from '../components/utils/Nav';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body >
        <div className='fixed top-0 w-full z-10'>      <Nav></Nav>
        </div>
         

        <div className="container mx-auto  ">
          {children} {/* Contenu dynamique des pages */}
        </div>


      </body>
    </html>
  );
}
