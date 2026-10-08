TURBO BGT v18 — baza V14 + wymagania użytkownika

Wgraj ZAWARTOŚĆ tego folderu bezpośrednio do repozytorium GitHub Pages /26/.
index.html musi leżeć w katalogu głównym repozytorium, a folder icons obok niego.

- baza interfejsu i funkcji z V14
- cykl budżetowy zawsze 10 → 10
- tygodnie 1, 2, 3... liczone od 10. dnia miesiąca
- nowa wypłata dopiero po zamknięciu poprzedniego cyklu
- na koniec miesiąca: oszczędności albo przeniesienie do następnego cyklu
- over limit: najpierw zabiera niewykorzystane środki z kolejnych tygodni; po ich wyczerpaniu różnica idzie z oszczędności
- prawdziwa pula oszczędności i możliwość jej wyzerowania
- edycja wypłaty, celu oszczędności i stałych opłat
- stałe opłaty z nazwami (Czynsz, Garaż i własne)
- wpłata do budżetu albo oszczędności
- 15 kategorii wydatków z ikonami
- wykres i podsumowania miesięcy / lat / tygodni
- PIN + AES-GCM 256 / PBKDF2
- języki z V14
- Synthwave / Miami Sunset


V14.1: OVER LIMIT rozlicza przekroczenia globalnie — może pobrać niewykorzystane środki z każdego dodatniego tygodnia (także wcześniejszego). Jeśli suma dodatnich sald nie wystarczy, brakująca część jest pobierana z puli oszczędności.
