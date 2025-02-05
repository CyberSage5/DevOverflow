import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent cursor-pointer">
            DevOverflow
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Button variant="ghost">{t('nav.login')}</Button>
          <Button>{t('nav.signup')}</Button>
        </div>
      </div>
    </nav>
  );
}