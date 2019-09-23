Изпит по "Основи на програмирането" – 28\.07\.2018
======================================================

01\. Приходи на стадион
----------------------------

Пепи е запален футболен фен и му е интересно колко пари се изкарват от един мач.
Вашата задача е да напишете програма, която изчислява колко е **печалбата от
един мач** и колко **пари се дават за благотворителност**. Всеки сектор има
равен брой места, като **приходите от един сектор** се сформират от
произведението **на капацитета на стадиона** и **цената на един билет**, делено
на **броя сектори**. **Парите за благотворителност** ще са равни **на една
осма** от разликата между **общата печалба** и **75%** от **прихода за един
сектор**.

### Вход

От конзолата се четат **3 реда**:

-   Първи ред - **брой сектори на стадиона** – **цяло число** в диапазона **[1…
    100 000]**

-   Втори ред - **капацитет на стадиона** – **цяло число** в диапазона **[1… 100
    000]**

-   Трети ред - **цена на един билет** – **реално число** в диапазона **[1.0…
    100 000.0]**

### Изход

Да се отпечатат на конзолата **2 реда**:

-   **"Total income - {обща печалба} BGN"**

-   **"Money for charity - {пари за благотворителност} BGN"**

**Резултатът да се форматира до втория знак след десетичната запетая.**

### Примерен вход и изход:

| **Вход**     | **Изход**                                                   | **Обяснения**                                                                                                                                      |
|--------------|-------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| 4 5000 5     | Total income - 25000.00 BGN Money for charity - 2539.06 BGN | Приходи за един сектор: (5000 \* 5) / 4 = 6250 Обща печалба: 6250 \* 4 = 25000 Пари за благотворителност: (25000 - (6250 \* 0.75)) / 8 = 2539.0625 |
| 8 10000 3.25 | Total income - 32500.00 BGN Money for charity - 3681.64 BGN |                                                                                                                                                    |

02\. Бира и чипс
---------------------

По време на мач Пепи решава да си купи бира и чипс от магазинчето в стадиона.
Вашата задача е да напишете програма, с която ще разберете дали **има
необходимите пари** и дали ще успее да си закупи съотвените неща. Цената **на
една бира е 1.20 лв**, а **цената на един пакет чипс** е равна на **45% от
общата стойност на закупените бири. Общата цена на чипса да се закръгли до
по-голямо число**.

### **Вход**

От конзолата се четат 4 реда:

-   На първия ред - **името на футболният фен** – **текст**

-   На втория ред - **бюджета** – **реално число** в диапазона **[1.0… 100
    000.0]**

-   На третия ред - **брой бутилки бира** – **цяло число** в диапазона **[1… 100
    000]**

-   На четвърти ред - **брой пакети чипс** – **цяло число** в диапазона **[1…
    100 000]**

### Изход

Да се отпечата **един ред**:

-   Ако **бюджетът е достатъчен за закупуването на продуктите**:

"**{Име} bought a snack and has {останали пари} leva left.**"

-   Ако бюджетът **не е достатъчен**:

"**{Име} needs {пари} more leva!**"

Резултатът да се **форматира до втория знак след десетичната** запетая.

### Примерен вход и изход:

| **Вход**      | **Изход**                                      | **Обяснения**                                                                                                                                                                                                                                                                                                        |
|---------------|------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| George 10 2 3 | George bought a snack and has 3.60 leva left.с | Общата цена на бирата: 1.20 \* 2 = **2.40** Цената на един пакет чипс: 45% от 2.40 = **1.08** Общата цена на чипса е: 1.08 \* 3 = **3.24** (закръгляме до по-голямо число) 3.24 =\> **4** Общата сума е: 2.40 + 4 = **6.4 6.4 \<= 10**, следователно George има достатъчно пари. Остават му 10 - 6.4 = **3.60 leva** |
| Valetin 5 2 4 | Valentin needs 2.40 more leva!                 |                                                                                                                                                                                                                                                                                                                      |

03\. Футболни сувенири
---------------------------

На почивката между полувремената на мача Пепи решил да си закупи сувенир за
спомен от световното. На щанд пред стадиона се предлагали различни стоки, като
цените им **зависели от отбора на дадената страна**. Напишете програма, която
**изчислява сумата за закупените сувенири**.

**Отборите и цените на стоките са както следва:**

|              | **Аржентина** | **Бразилия** | **Хърватия** | **Дания**    |
|--------------|---------------|--------------|--------------|--------------|
| **флагчета** | **3,25 лв.**  | **4,20 лв.** | **2,75 лв.** | **3,10 лв.** |
| **шапки**    | **7,20 лв.**  | **8,50 лв.** | **6,90 лв.** | **6,50 лв.** |
| **плакати**  | **5,10 лв.**  | **5,35 лв.** | **4,95 лв.** | **4,80 лв.** |
| **стикери**  | **1,25 лв.**  | **1,20 лв.** | **1,10 лв.** | **0,90 лв.** |

### Вход

От конзолата се четат **3 реда**:

-   **Първият ред – отбор** – **текст с възможности: "Argentina", "Brazil",
    "Croatia", "Denmark"**

-   **Вторият ред – вид сувенири – текст с възможности: "flags", "caps",
    "posters", "stickers"**

-   **Третият ред – брой закупени сувенири – цяло число в интервала [1…200]**

### Изход

Да се **отпечата на конзолата един ред** :

-   **Ако страната и стоката са правилно зададени:**

**''Pepi bought {брой сувенири} {вид сувенири} of {отбор} for {крайна сума}
lv.''**

-   Ако страната не е правилно зададена:

"Invalid country!"

-   **Ако стоката не е правилно зададена**:

"Invalid stock!"

**Резултатът да е форматиран до втората цифра след десетичната запетая.**

### Примерен вход и изход

| Вход | Изход | Обяснения |
|-------------------|-----------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Brazil stickers 5 | Pepi bought 5 stickers of Brazil for 6.00 lv. | Пепи избира страна  Бразилия  и сувенир  стикери  => цената на един стикер на Бразилия е  1.20  => Общата сума, която трябва да заплати е :  5 * 1.20 = 6.00 |
| **Вход** | **Изход**  |  |
| Denmark caps 8 | Pepi bought 8 caps of Denmark for 52.00 lv. |  |
| **Вход** | **Изход** |  |
| Croatia flags 13 | Pepi bought 13 flags of Croatia for 35.75 lv. |  |
| **Вход** | **Изход** |  |
| USA caps 18 | Invalid country! |  |

04\. Най-добър играч
---------------------------

Пепи иска да напишете програма, чрез която да разбере кой е най-добрият играч от
световното първенство. Информацията, която **получавате ще бъде играч** и
**колко гола е отбелязал**. От вас се иска да **отпечатате кой е играчът с
най-много голове** и дали е **направил хет-трик**. **Хет-трик** е, когато
футболистът **е вкарал 3 или повече гола**. **Ако футболистът е вкарал 10 или
повече гола, програмата трябва да спре**.

**Вход**

От конзолата се четат по **два реда до въвеждане на команда** "**END**":

-   Име на играч – **текст**

-   Брой вкарани голове – **цяло положително число в интервала [1 … 10000]**

**Изход**

На конзолата да се отпечатат **2 реда** :

-   На **първия ред**:

**"{име на играч} is the best player!"**

-   На **втория ред** :

    -   Ако най-добрият футболист **е направил хеттрик**:

**"{име на играч} has scored {брой голове} goals and made a hat-trick !!!"**

-   Ако най-добрият футболист **не е направил хеттрик**:

**"{име на играч} has scored {брой голове} goals."**

**Примерен вход и изход**

| Вход | Изход | Обяснения |
|----------------------------------|--------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Neymar 2 Ronaldo 1 Messi 3 END | Messi is the best player! He has scored 3 goals and made a hat-trick !!! | Първо се въвежда Neymar с 2 гола като за момента той има най-много голове, след това Ronaldo с 1 гол като той има по-малко голове от Neymar, който е с 2, след това Messi, който има 3 гола. Головете на Messi са повече от тези на Neymar и вече Messi има най-много голове. След като головете са му 3, той е направил и хет-трик. |
| **Вход** | **Изход** |  |
| Silva 5 Harry Kane 10 | Harry Kane is the best player! He has scored 10 goals and made a hat-trick !!! |  |
| **Вход** | **Изход** |  |
| Rooney 1 Junior 2 Paolinio 2 END | Junior is the best player! He has scored 2 goals. |  |
| **Вход** | **Изход** |  |
| Petrov 2 Drogba 11 | Drogba is the best player! He has scored 11 goals and made a hat-trick !!! |  |

05\. Фен магазин
---------------------------

След мача на любимият си отбор, Пепи решава да отиде до **фен магазина** и да си
купи нещо за спомен. Напишете програма, чрез която ще разберете дали
**бюджета**, с който разполага ще стигне **за закупуването на артикулите**.

Артикулите в магазина са следните :

| Артикул     | hoodie | keychain | T-shirt | flag   | sticker |
|-------------|--------|----------|---------|--------|---------|
| Цена в лева | **30** | **4**    | **20**  | **15** | **1**   |

**Вход**

От конзолата се четат:

-   Бюджет – **цяло положително число в интервала [1 … 10000]**

-   **n** - Брой предмети – **цяло положително число в интервала [1 … 10000]**

На следващите **n** реда се чете :

-   Предмет – **текст**

**Изход**

Да се отпечата **един ред**:

-   Ако бюджетът му е **по-голям или равен на сумата от предметите**:

**"You bought {брой предмети} items and left with {останали пари} lv."**

-   Ако бюджетът му е **по-малък от сумата на предметите**:

**"Not enough money, you need {нужни пари} more lv."**

**Примерен вход и изход**

| Вход | Изход | Обяснения |
|----------------------------------|--------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Neymar 2 Ronaldo 1 Messi 3 END | Messi is the best player! He has scored 3 goals and made a hat-trick !!! | Първо се въвежда Neymar с 2 гола като за момента той има най-много голове, след това Ronaldo с 1 гол като той има по-малко голове от Neymar, който е с 2, след това Messi, който има 3 гола. Головете на Messi са повече от тези на Neymar и вече Messi има най-много голове. След като головете са му 3, той е направил и хет-трик. |
| **Вход** | **Изход** |  |
| Silva 5 Harry Kane 10 | Harry Kane is the best player! He has scored 10 goals and made a hat-trick !!! |  |
| **Вход** | **Изход** |  |
| Rooney 1 Junior 2 Paolinio 2 END | Junior is the best player! He has scored 2 goals. |  |
| **Вход** | **Изход** |  |
| Petrov 2 Drogba 11 | Drogba is the best player! He has scored 11 goals and made a hat-trick !!! |  |

06\. Смени
---------------------------

Любимият отбор на Пепи е на финал, но тръгва да губи мача. Треньорът на отбора
не знае какви смени да направи, за да обърне резултата. Напишете програма, с
която ще разберете кой са **първите 6 смени**, които могат да се направят.
Знаем, че всяка цифра от двата номера е в даден интервал.За да бъде **възможна
една смяна**, **първото число от номера трябва да бъде четно, а второто
нечетно**.

**Вход**

От конзолата се четат:

-   **K** - началото на интервала за първото число от първия номер – **цифра в
    интервала [0..8]**

-   **L** - началото на интервала за второто число от първия номер – **цифра в
    интервала [9..0]**

-   **M** - началото на интервала за първото число от втория номер – **цифра в
    интервала [0..8]**

-   **N** - началото на интервала за второто число от втория номер – **цифра в
    интервала [9..0]**

**Изход**

На конзолата да се отпечатат **първите 6 възможни смени** по следния начин :

-   Ако смяната **е възможна и номерата не съвпадат,** да се отпечата:

    **"{K}{L} - {M}{N}"**

-   Ако смяната **е възможна и номерата съвпадат**, да се отпечата:

    **"Cannot change the same player."**

**Примерен вход и изход**

| **Вход** | **Изход**                                                                                                     | **Обяснения**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|----------|---------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 7 6 8 5  | Cannot change the same player. 89 - 87 89 - 85 87 - 89 Cannot change the same player. 87 - 85                 | За първия номер знаем, че: Първата цифра е в интервала [7;8], втората цифра е в интервала [9;6]. Аналогично, за втория номер: Първата цифра е в интервала [8;8], втората цифра е в интервала [9;5]. Започваме да генерираме всички възможни комбинации от цифри в тези интервали. Първата генерирана комбинация е 79 – 89. Тя обаче **не е валидна**, понеже не изпълнява условието **първата цифра на всеки номер да е четна, а втората нечетна**. Следващата комбинация е 79 – 88. Тя също не изпълнява условието, следователно **не я принтираме,** и т.н ... Стигаме до комбинацията 89 – 89, която е **валидна**,но понеже **двата номера са еднакви**, принтираме съответния изход. Следващата комбинация е 89 - 88, която е невалидна. След нея е 89 – 87, която е валидна и я принтираме. Така **броят на смените става 1**. Продължаваме да генерираме комбинации и стигаме до 87 – 85, която е 4тата валидна смяна. В конкретния случай нямаме повече валидни смени, за това не са принтирани 6 такива. |
| 6 7 5 6  | Cannot change the same player. 69 - 67 69 - 89 69 - 87 67 - 69 Cannot change the same player. 67 - 89 67 - 87 | Започваме да генерираме комбинациите от дадените числа. Първата комбинация е 69-59, но е **невалидна и не я принтираме**. Втората е 69 – 58, но също е невалидна. Продължаваме и стигаме до комбинацията 69-69, която е **валидна**, но понеже **номерата са еднакви** принтираме "Cannot change the same player.".Следващата комбинация 69-68 е невалидна. Следва 69-67, която е валидна и я принтираме, така **броят на смените става 1**, и т.н... Стигаме до валидната комбинация 67-87. Принтираме я и **броят на смените става 6**. сПрограмата **приключва**.                                                                                                                                                                                                                                                                                                                                                                                                                                              |