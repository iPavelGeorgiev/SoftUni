Изпит по "Основи на програмирането" – 23.12.2018
======================================================

01\. Коледни лакомства
---------------------------

Инна ще покани гости за Коледа и решава да ги посрещне с различни коледни
лакомства. Тя отива до местната сладкарница, за да **купи по няколко килограма
от всеки вид**. Напишете програма, която изчислява **колко пари ще са необходими
на Инна**, според **количеството** и цените **в сладкарницата.**
На** **конзолата ще бъдат **въведени цените **в лева на** баклавата и мъфините и
количеството щолен, бонбони и бисквити в килограми**. Цените на лакомствата се
формират както следва:

-   **Щолен – 60% по-скъп от баклавата**

-   **Бонбони – 80% по-скъпи от мъфини**

-   **Бисквити – 7.50 лв. за килограм**

### Вход

От конзолата се четат **5 числа**:

-   **Първи ред** – **цена на баклавата на килограм**. **Реално число в
    интервала [0.00…40.00]**

-   **Втори ред** – **цена на мъфините на килограм**. **Реално число в интервала
    [0.00…30.00]**

-   **Трети ред** – **килограмите щолен**. **Реално число в интервала
    [0.00…50.00]**

-   **Четвърти ред** – **килограмите бонбони**. **Реално число в интервала
    [0.00… 70.00]**

-   **Пети ред** – **килограмите бисквити. Цяло число в интервала [0 ... 100]**

### Изход

Да се отпечата на конзолата **едно число с плаваща запетая**: **колко пари ще са
нужни на Инна, за да закупи всички лакомства. Резултатът да се форматира до
втория знак след десетичната запетая.**

### Примерен вход и изход

| Вход                | Изход  | Обяснения                                                                                                                                                                                                                                                          |
|---------------------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 6.90 4.20 1.5 2.5 1 | 42.96  | Цена на щолена = 6.90 + 6.90 * 0.60 = 11.04 лв. за килограм Сума щолен = 1.5 * 11.04 = 16.56 Цена на бонбоните = 4.20 + 4.20 * 0.80 = 7.56 лв. за килограм Сума бонбони = 2.5 * 7.56 = 18.90 Сума бисквити = 1 * 7.50 = 7.50 Сметка = 16.56 + 18.90 + 7.50 = 42.96 |
| **Вход**                | **Изход**  |                                                                                                                                                                                                                                                                    |
| 5.55 3.57 4.3 3.6 7 | 113.82 |                                                                                                                                                                                                                                                                    |
| **Вход**                | **Изход**  |                                                                                                                                                                                                                                                                    |
| 7.79 5.35 9.3 0 0   | 115.92 |                                                                                                                                                                                                                                                                    |

02\. Коледен базар
-----------------------

Коледа наближава и Коледният базар на книгата отваря врати. Организаторите искат
да дарят **определена сума** от продажба на следните жанрове книги: **фентъзи,
хорър, романтика.** Да се напише програма, която изчислява **дали организаторите
са успели са съберат желаната сума от продажба на книги**, **като се има
предвид, че с 20 процента от изкараната сума, се заплаща ДДС. Книгите от всеки
жанр имат различна цена:**

-   **Фентъзи – 14.90 лв.**

-   **Хорър – 9.80 лв.**

-   **Романтика – 4.30 лв.**

**Ако след заплащане на ДДС, целта е достигната, продавачите ще получат 10%
възнаграждение от парите надвишаващи целта. Сумата за възнаграждение трябва да е
закръглена към най-близкото цяло число надолу. Останалите пари, се добавят към
основната сума за даряване.**

### Вход

От конзолата се четат **4 реда**:

-   **Парите, които организаторите искат да съберат – реално число в интервала
    [1.00 … 10000.00]**

-   **Брой фентъзи книги – цяло число в интервала [0 … 1000]**

-   **Брой хорър книги – цяло число в интервала [0 … 1000]**

-   **Брой романтични книги – цяло число в интервала [0 … 1000]**

### Изход

Отпечатването на конзолата зависи от резултата:

-   Ако **е събрана сумата от Коледният базар** :

    -   **" {дарена сума} leva donated."**

    -   **"Sellers will receive {възнаграждение} leva."**

-   Ако **НЕ е достигната сумата**:

    -   **"{парите нужни до достигане на целта} money needed."**

**Дарената/Недостигаща сума трябва да се форматира до втория знак след
десетичната запетая**.

### Примерен вход и изход

| **Вход**    | **Изход**                                         | **Обяснения**                                                                                                                                                                                                                                                                                                                                                                                            |
|-------------|---------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 200 15 10 5 | 267.40 leva donated. Sellers will receive 7 leva. | Сумата от продажбата =\> 15 \* 14.90 + 10 \* 9.80 + 5 \* 4.30 = 343лв 20% ДДС от 343 = 68.60 лв. Сума след заплащане на ДДС -\> 274.40 лв. Понеже 274.40 \> 200, служителите получават 10% от сумата над целта 274.40 – 200 = 74.40 лв. 10% от 74.10 = 7 лв. за продавачите. 74.40 – 7 = 67.40 лв. които добавяме към сумата за даряване. 200 + 67.40 = 267.40лв. - крайната сума, която ще бъде дарена. |
| **Вход**    | **Изход**                                         | **Обяснения**                                                                                                                                                                                                                                                                                                                                                                                            |
| 168 5 3 8   | 57.36 money needed.                               | Сумата от продажбата =\> 5 \* 14.90 + 3 \* 9.80 + 8 \* 4.30 = 138.30 лв. 20% ДДС от 138.30 = 27.68 лв. Сума след заплащане на ДДС -\> 110.64 лв. -\> 110.64 \< 168, не са събрани достатъчно пари, не достигат 168 – 110.64 = 57.36 лв.              |

03\. Сладкарница
-----------
С наближаването на коледните и новогодишни празници, сладкарница започва
записване на поръчки за изработка на сладкиши, като предлага следният ценоразпис
и отстъпки според датата на която е направена поръчката.

|                      | **Торта**     | **Суфле**    | **Баклава**   |
|----------------------|---------------|--------------|---------------|
| **До 15 декември**   | 24 лв./бр.    | 6.66 лв./бр. | 12.60 лв./бр. |
| **След 15 декември** | 28.70 лв./бр. | 9.80 лв./бр. | 16.98 лв./бр. |

**До 22 декември включително съществуват следните отстъпки, които се прилагат в
следния ред:**

-   **От 100 лв. до 200 лв. има 15% отстъпка**

-   **Над 200 лв. има 25% отстъпка**

-   **До 15 декември включително, 10% отстъпка на крайната цена**

### Вход

От конзолата се четат **3 реда**:

1.  **Сладкиш – текст - “Cake”, “Souffle” или “Baklava”**

2.  **Брой на поръчаните сладкиши – цяло число в интервала [1 … 10000]**

3.  **Ден от месец декември преди Коледа – цяло число в интервала [1 … 24]**

### Изход

На конзолата се отпечатва **1 ред**:

-   **Цената, която трябва да се заплати**, **форматирана до втория знак след
    десетичната запетая**

### Примерен вход и изход

| Вход          | Изход     | Обяснения                                                                                                                                                                                                                                                                  |
|---------------|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Cake 10 15    | 162.00    | Цената на 10 торти до 15 декември е 10 * 24 =  240 лв.  200 < 240 ->  25% отстъпка 25 % от 240 =  60 лв. отстъпка 240 – 60 = 180 лв. Поръчката е направена  до 15 декември -> 10% отстъпка от крайната цена  10% от 180 = 18 лв. отстъпка  Крайна цена: 180 – 18 = 162 лв. |
| **Вход**      | **Изход** |                                                                                                                                                                                                                                                                            |
| Souffle 20 24 | 196.00    |                                                                                                                                                                                                                                                                            |
| **Вход**      | **Изход** |                                                                                                                                                                                                                                                                            |
| Baklava 50 1  | 425.25    |                                                                                                                                                                                                                                                                            |
| **Вход**      | **Изход** |                                                                                                                                                                                                                                                                            |
| Cake 5 12     | 91.80     |                                                                                                                                                                                                                                                                            |

04\. Коледни подаръци 
---------------------------

Коледа наближава и Иван решава да купи по един подарък на всеки от семейството
си. Той си прави списък с хората, на които иска да подари нещо. Това, какъв
подарък ще купи зависи от възрастта хората в списъка му:

-   **Всички до 16 години, влизат в графа деца и ще получат играчка, а всички
    останали, се считат за възрастни и ще получат коледен пуловер.**

-   **Цената на всяка играчка е 5 лв., а цената на един пуловер е 15 лв.**

Напишете програма, която пресмята **колко души от семейството на Иван са до 16
години, и колко са над тази възраст, също и колко пари ще струват подаръците на
децата и възрастните.**

### Вход

От конзолата се четат поредица от редове до получаване на команда
"**Christmas**":

-   **Годините на всеки - цяло число в интервала [1 … 130]**

### Изход

Да се **отпечатат** на конзолата **четири реда**:

-   **"Number of adults: {брой клиенти над 16 години}"**

-   **"Number of kids: {брой клиенти до 16 години}"**

-   **"Money for toys: {сумата за всички играчки}"**

-   **"Money for sweaters: {сума за всички пуловери}"**

### Примерен вход и изход

| Вход                              | Изход                                                                           | Обяснения                                                                                                                                                                                                                           |
|-----------------------------------|---------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 16 20 46 12 8 20 49 Christmas     | Number of adults: 4 Number of kids: 3 Money for toys: 15 Money for sweaters: 60 | Първият човек е на 16 години, 16 <= 16 -> спада към децата и за него ще бъде закупена играчка на стойност 5 лв. Вторият човек е на 20 години, 20 > 16 -> спада към възрастните и за нещо ще бъде закупен пуловер на стойност 15 лв. |
| **Вход**                          | **Изход**                                                                       |                                                                                                                                                                                                                                     |
| 16 16 16 16 16 Christmas          | Number of adults: 0 Number of kids: 5 Money for toys: 25 Money for sweaters: 0  |                                                                                                                                                                                                                                     |
| **Вход**                          | **Изход**                                                                       |                                                                                                                                                                                                                                     |
| 18 20 48 45 56 37 12 14 Christmas | Number of adults: 6 Number of kids: 2 Money for toys: 10 Money for sweaters: 90 |                                                                                                                                                                                                                                     |

05\. Подаръци от Дядо Коледа
---------------------------------

Дядо Коледа започва да обикаля от град на град за да носи подаръци на всички
послушни деца. Той ви моли да напишете **програма**, която да **принтира на
конзолата всички адресни номера** от **М** до **N**, които **се делят
едновременно на 2 и на 3 без остатък,** тъй като Дядо Коледа, знае че там живеят
само послушни деца. От конзолата ще се чете още **един номер на адрес S**. Ако
**някое от делящите се на 2 и 3 адреси** е **равно на адреса S, този адрес не
трябва да се принтира** и **програмата трябва да приключи**. **В противен случай
се принтират всички адресни номера до N**, които отговарят на условието.

### Вход

От конзолата се **четат точно 3 числа**, всяко на **отделен ред**:

-   **N** – **цяло** число **– 0 \<= N \< M**

-   **M** – **цяло** число – **N \< M \<= 10000**

-   **S** – **цяло** числo – **N \<= S \<= M**

### Изход

На конзолата се **принтират** на един ред, **всички адресни номера отговарящи на
условията**, **разделени с интервал**.

### Примерен вход и изход

| **Вход**   | **Изход**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | **Обяснения**                                                                                                                                                                                   |
|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1 30 15    | 30 24 18 12 6                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Адресните номера от **30** до **1,** които се делят едновременно на 2 и на 3 без остатък са: 30, 24, 18, 12 и 6. Като 15 **не е равно** на нито едно, затова поредицата **не бива прекъсната**. |
| **Вход**   | **Изход**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                                 |
| 1 36 12    | 36 30 24 18                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Адресните номера от **36** до **1**, които се **делят едновременно на 2** и **на 3 без остатък, са**: 36, 30, 24, 18, 12 и 6. **12 е равно на адреса S**, затова **спираме до 18**.             |
| **Вход**   | **Изход**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                                 |
| 20 1000 36 | 996 990 984 978 972 966 960 954 948 942 936 930 924 918 912 906 900 894 888 882 876 870 864 858 852 846 840 834 828 822 816 810 804 798 792 786 780 774 768 762 756 750 744 738 732 726 720 714 708 702 696 690 684 678 672 666 660 654 648 642 636 630 624 618 612 606 600 594 588 582 576 570 564 558 552 546 540 534 528 522 516 510 504 498 492 486 480 474 468 462 456 450 444 438 432 426 420 414 408 402 396 390 384 378 372 366 360 354 348 342 336 330 324 318 312 306 300 294 288 282 276 270 264 258 252 246 240 234 228 222 216 210 204 198 192 186 180 174 168 162 156 150 144 138 132 126 120 114 108 102 96 90 84 78 72 66 60 54 48 42 |                                                                                                                                                                                                 |

06\. Коледна украса
------------------------

Семейство Иванови решават да подменят коледната украса в своя дом и да поръчат
нова по интернет. Вашата задача е **да напишете програма, която изчислява, дали
бюджетът ще им стигне за украсата. Цената на всеки предмет ще представялва
сумата от ASCII кодовете на всяка буква от думата.**

### Вход

Първия ред от входа представлява:

-   **Бюджетът за украсата - цяло число в интервала [1 … 50000]**

След това се четат **поредица от редове до получаване на команда "Stop"**:

-   **Име на предмет - текст**

### Изход

**При успешна покупка (т.е ако цената на предмета е по-малка или равна на
наличните пари), на конзолата да се отпечата:**

-   **"Item successfully purchased!"**

**При неуспешна покупка (т.е ако цената е по-голяма от останалите пари), да се
отпечата:**

-   **"Not enough money!" и програмата да приключи**

**При получаване на команда "Stop", на конзолата да се отпечата:**

-   **"Money left: {останалият бюджет}" и програмата да приключи**

### Примерен вход и изход

| **Вход**                                   | **Изход**                                                                                                | **Обяснения**                                                                                                                                                                                                                                                                                                                      |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3000 star Christmas tree tinsel Tree stand | Item successfully purchased! Item successfully purchased! Item successfully purchased! Not enough money! | Бюджетът, с който разполагаме е 3000лв. Цената на първата украса се образува от ASCII стойностите за всеки символ (s + t + a + r) = 442 \<= 3000, следователно я купуваме. Остават ни 3000 – 442 = 2558 лв. … Цената на четвъртия артикул е 970, а останалият бюджет е 497, няма достатъчно средства и програмата приключва работа |
| **Вход**                                   | **Изход**                                                                                                | **Обяснения**                                                                                                                                                                                                                                                                                                                      |
| 5000 Christmas lights wreath Stop          | Item successfully purchased! Item successfully purchased! Money left: 2724                               | Бюджетът, с който разполагаме е 5000лв. Цената на първата украса се образува от ASCII стойностите за всеки символ (Christmas lights) = 1625 \<= 5000, купуваме я. Остават ни 5000 – 1625 = 3375 лв. … Получаваме командата "Stop", печатаме останалата сума от бюджета и програмата приключва работа                               |