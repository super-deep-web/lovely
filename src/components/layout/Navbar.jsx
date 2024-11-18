import { useState, useEffect } from "react";
import {
  MessageCircleHeart,
  Home,
  BookHeart,
  AudioWaveform,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSecretPage } from "../context/useSecretPage";

const NavLink = ({ to, children, icon: Icon, label }) => {
  const isMobile = window.innerWidth <= 768;

  return (
    <Link
      to={to}
      className="px-4 py-2 text-blue-600 hover:text-blue-800 transition-colors flex flex-col items-center"
    >
      {isMobile ? (
        <>
          <Icon className="h-6 w-6" />
          <span className="text-xs mt-1">{label}</span>
        </>
      ) : (
        children
      )}
    </Link>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = window.innerWidth <= 768;
  const { isSecretUnlocked } = useSecretPage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Inicio", icon: Home },
    { to: "/letter", label: "Cartita", icon: BookHeart },
    { to: "/music", label: "Música", icon: AudioWaveform },
    ...(isSecretUnlocked
      ? [
          {
            to: "/secret",
            label: "Secreto",
            icon: Sparkles,
            className: "text-pink-500 animate-pulse",
          },
        ]
      : []),
  ];

  return (
    <motion.nav
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full ${
        isMobile ? "bottom-0 top-auto bg-slate-100" : "top-0"
      } z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-100 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {!isMobile && (
            <div className="flex items-center space-x-2">
              <MessageCircleHeart className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-semibold text-blue-600">
                LovelyUI
              </span>
            </div>
          )}

          <div
            className={`flex items-center ${
              isMobile ? "justify-around w-full" : "space-x-4"
            }`}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                icon={link.icon}
                label={link.label}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
