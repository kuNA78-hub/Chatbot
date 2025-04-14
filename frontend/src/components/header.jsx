import React, { useEffect, useState } from "react";
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/clerk-react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";
import { BriefcaseBusiness, ChevronDown, Heart, LayoutDashboard, PenBox, StarsIcon } from "lucide-react";

const Header=()=>{
  const [showSignIn, setShowSignIn] = useState(false);
  const [search, setSearch] = useSearchParams();
  

  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [search]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
      setSearch({});
    }
  };
  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link to="/">
          <img src="/logo.png" className="h-40" alt="Hirrd Logo" />
        </Link>
        <div className="flex gap-8">

      <SignedOut>
      <Button variant="outline" onClick={() => setShowSignIn(true)}>
        Login
      </Button>
      
      </SignedOut>
      <SignedIn>
 

              <Link to="/library">
              <Button className="flex items-center gap-2">
                  <StarsIcon className="h-4 w-4" />
                  <span className="hidden md:block"> Smart Library</span>
                </Button></Link>
      <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
      >
       
       <UserButton.MenuItems>
                <UserButton.Link
                   label="Ask"
                   labelIcon={<BriefcaseBusiness size={15} />}
                  href="/my-page"
                />
          
                <UserButton.Action label="manageAccount" />
              </UserButton.MenuItems>


        </UserButton>
      </SignedIn>
    </div>
</nav>
{showSignIn && <div>
  <div
  className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
  onClick={handleOverlayClick}    
  ><SignIn 
  signUpForceRedirectUrl="/my-page"
   fallbackRedirectUrl="/my-page"
 />
 </div>
  </div>}
       </>
       )
      }
export default Header;