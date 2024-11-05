import Link from 'next/link';
import styles from '@/app/styles/Header.module.css';
import DropdownMenuProduct from '@/app/components/DropDownMenuProduct'; 
import DropdownMenuSolution from '@/app/components/DropDownMenuSolution';

export default function Header() {
  return (
    <header className={`flex justify-between items-center p-4 ${styles.header}`}>
      <div className="logo">
      <a href="/">
      <img src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/664ffc89ff539b531cc46813_Clay-logo-black-2024.webp" alt="23BG Logo" className={styles.headerImage}  />
      </a>
       
      </div>
      <nav className="flex space-x-9">
        <DropdownMenuProduct>
          <Link className='text-black text-sm' href="/product">Product</Link>
        </DropdownMenuProduct>
        <DropdownMenuSolution>
        <Link className='text-black text-sm' href="/solutions">Solutions</Link>
        </DropdownMenuSolution>
        
        <Link className='text-black text-sm' href="/resources">Resources</Link>
    
        
        <Link className='text-black text-sm' href="/company">Company</Link>
        <Link className='text-black text-sm' href="/enterprise">Enterprise</Link>
        <Link className='text-black text-sm' href="/pricing">Pricing</Link>
      </nav>
      <div className="space-x-6">
        <button className="text-gray-600 text-sm">Login</button>
        <button className="bg-black text-white px-4 py-2 rounded text-sm">Sign up</button>
      </div>
    </header>
  );
}
