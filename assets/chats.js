const mockChats = [
  {
    name: "Virat Kohli",
    message:
      "A phenomenal cricketer and a true modern-day legend, Virat Kohli has etched his name in the annals of cricketing history with his aggressive batting style, unwavering intensity, and an insatiable hunger for runs. His remarkable consistency across all formats, coupled with his unparalleled fitness and leadership prowess, have propelled him to the pinnacle of the sport. Kohli's relentless pursuit of excellence and his ability to shatter records have made him a cricketing icon, inspiring a generation of aspiring players worldwide. With numerous accolades already under his belt, including the fastest ODI century by an Indian batsman, Kohli continues to raise the bar, redefining what it means to be a complete cricketer. His zeal, determination, and passion for the game are unmatched, making him a true ambassador of the sport and solidifying his status as one of the greatest batsmen of the modern era.",
  },
  {
    name: "Sachin Tendulkar",
    message:
      "Widely revered as the 'God of Cricket,' Sachin Tendulkar's name resonates with an entire generation of cricket enthusiasts, transcending borders and cultures. His mastery over the willow has etched his name into the annals of sporting history, and his achievements are nothing short of legendary. With a career spanning over two decades, Tendulkar's remarkable feats, including the highest runs in both Tests and ODIs, are a testament to his unwavering dedication and unparalleled talent. His humility, grace, and passion for the game have made him an inspiration to millions, elevating cricket to an art form and cementing his place as an eternal icon. Tendulkar's ability to captivate audiences with his sublime stroke play and his relentless pursuit of excellence have made him a global phenomenon, transcending the realms of sport and becoming a symbol of hope and aspiration for countless individuals around the world.",
  },
  {
    name: "A.R. Rahman",
    message:
      "A.R. Rahman's musical genius has redefined the boundaries of Indian music, captivating audiences across the globe with his exceptional talent and unique ability to seamlessly blend traditional Indian instruments with contemporary sounds. His compositions are not mere melodies but artistic masterpieces that have revolutionized Indian music and left an indelible mark on the hearts of millions. Rahman's two Academy Awards are a testament to his global recognition, but it is his ability to evoke emotions and transport listeners to another realm that truly sets him apart. With each soundtrack, he weaves a tapestry of sounds, blending intricate melodies and intricate rhythms, creating a musical experience that transcends cultural boundaries. His music has the power to uplift the soul, inspire the mind, and touch the deepest recesses of the human heart, making him a true maestro of his craft.",
  },
  {
    name: "Amitabh Bachchan",
    message:
      "Amitabh Bachchan, fondly known as the 'Big B,' is a colossus in the realm of Indian cinema, a true living legend whose impact on the industry is unparalleled. With a career spanning over five decades, his iconic performances and commanding screen presence have earned him an unparalleled status in Bollywood. From portraying the brooding 'Angry Young Man' to embodying diverse characters with equal finesse, Bachchan's versatility and depth have made him a cultural icon. His distinct baritone voice and magnetic personality have transcended the silver screen, making him a household name and an enduring symbol of Indian cinema's rich heritage. Bachchan's ability to captivate audiences with his powerful acting and his relentless dedication to his craft have earned him a legion of fans across generations. His contributions to Indian cinema have not only entertained but have also shaped the cultural landscape, making him a true ambassador of the art form.",
  },
  {
    name: "Priyanka Chopra",
    message:
      "Priyanka Chopra Jonas is a true global icon, a multifaceted artist who has shattered boundaries and redefined what it means to be a modern Indian woman. From her humble beginnings as a Miss World winner to her meteoric rise in Bollywood and Hollywood, she has carved out a unique path for herself, defying conventions and breaking down barriers. Chopra Jonas's talent, beauty, and determination have earned her accolades and a legion of fans worldwide. Her ability to seamlessly transition between different roles, cultures, and industries is a testament to her versatility and adaptability. As a UNICEF Goodwill Ambassador, she has used her platform to advocate for social causes, empowering women and inspiring others to dream big and overcome obstacles. Chopra Jonas's journey is a testament to the power of perseverance, resilience, and the pursuit of one's passions, making her a true role model for aspiring artists and individuals around the world.",
  },
  {
    name: "Ratan Tata",
    message:
      "Ratan Tata is a visionary industrialist and philanthropist whose name is synonymous with ethical leadership, innovation, and a commitment to excellence. As the former chairman of the Tata Group, one of India's most respected conglomerates, he ushered in a new era of growth and technological advancement, transforming the company into a global powerhouse. Tata's commitment to sustainable business practices, corporate social responsibility, and the betterment of society have earned him admiration and respect globally. His transformational leadership and vision have not only shaped India's economic landscape but have also inspired countless entrepreneurs to strive for excellence while prioritizing ethical values. Tata's philanthropic endeavors and his dedication to uplifting communities have made him a beacon of hope and a true champion of social change. His legacy extends far beyond the realms of business, as he has become a role model for generations of leaders, inspiring them to pursue success while remaining grounded in their values and contributing to the greater good.",
  },
  {
    name: "Lata Mangeshkar",
    message:
      "Lata Mangeshkar's melodious voice has enchanted generations of music lovers, earning her the well-deserved moniker of the 'Nightingale of India.' With a career spanning over seven decades, she has effortlessly traversed various genres, languages, and styles, leaving an indelible mark on the Indian music industry. Mangeshkar's ability to infuse emotions into her renditions has made her a cultural icon, revered by audiences across the globe. Her versatility, dedication, and sheer mastery of her craft have cemented her place as one of the greatest playback singers of all time, inspiring countless aspiring vocalists to follow in her footsteps. Mangeshkar's voice has the power to transport listeners to a realm of pure emotion, evoking a range of sentiments from joy to sorrow, love to longing. Her ability to breathe life into every note has made her performances timeless, resonating with audiences across generations and transcending cultural boundaries.",
  },
  {
    name: "Satyajit Ray",
    message:
      "Satyajit Ray was a cinematic genius whose visionary works redefined the landscape of Indian cinema and left an indelible mark on the art of filmmaking. His masterpieces, such as 'Pather Panchali' and 'The Apu Trilogy,' are revered for their poetic realism, social commentary, and profound exploration of human emotions. Ray's unique storytelling style, coupled with his meticulous attention to detail and his ability to capture the essence of human experience, has elevated his films to the realm of artistic masterpieces. His works have not only garnered global acclaim but have also inspired generations of filmmakers to push the boundaries of their craft and showcase the rich tapestry of Indian culture on the silver screen. Ray's films are a testament to the power of cinema as an art form, transcending language and cultural barriers to evoke universal emotions and provoke thought-provoking discussions on the human condition.",
  },
  {
    name: "Kalpana Chawla (1961-2003)",
    message:
      "A pioneering astronaut, Kalpana Chawla was the first Indian-born woman in space. Tragically lost in the Columbia space shuttle disaster, she inspired countless young women to pursue careers in science, technology, engineering, and mathematics (STEM).",
  },
  {
    name: "Aishwarya Rai Bachchan",
    message:
      "Aishwarya Rai Bachchan is a true embodiment of grace, beauty, and talent, a global icon whose presence transcends the boundaries of cinema. As a former Miss World and renowned actress, she has captivated audiences worldwide with her ethereal presence and powerful performances. Bachchan's ability to effortlessly portray complex characters with depth and nuance has earned her critical acclaim and a legion of fans. Her performances are not mere exhibitions of acting but profound explorations of the human psyche, leaving an indelible mark on the hearts and minds of viewers. Bachchan's beauty extends beyond her physical appearance; it lies in her poise, her resilience, and her unwavering commitment to her craft.",
  },
  {
    name: "Ms Dhoni",
    message:
      "M.S. Dhoni's name is etched in the annals of Indian cricket history as a legendary captain and wicket-keeper-batsman. Known for his calm demeanor, tactical brilliance, and finishing prowess, Dhoni has led the Indian team to numerous triumphs, including the coveted Cricket World Cup. His unorthodox style and ability to thrive under pressure have earned him a loyal fan base worldwide. Dhoni's leadership qualities, combined with his athleticism and batting skills, have made him a true icon of the sport, inspiring generations of cricketers to strive for excellence and embrace their unique strengths. Beyond his on-field achievements, Dhoni's humility and down-to-earth nature have endeared him to fans, making him a role model for aspiring athletes and individuals alike.",
  },
  {
    name: "Mary Kom",
    message:
      "Mary Kom, a six-time World Champion boxer, is a true embodiment of determination, resilience, and the indomitable spirit of Indian women. Her aggressive fighting style and unwavering dedication have earned her the moniker of 'Magnificent Mary,' transcending cultural and societal boundaries. Kom's journey from humble beginnings to becoming a national icon and a symbol of women's empowerment has inspired countless young athletes to dream big and defy limitations. Her achievements have not only brought glory to India but have also paved the way for greater recognition and support for women in sports. Kom's perseverance in the face of adversity and her unwavering commitment to her craft have made her a role model for generations, inspiring individuals to pursue their dreams with passion and resilience.",
  },
  {
    name: "Amitabh Ghosh",
    message:
      "Amitabh Ghosh is an internationally acclaimed author whose thought-provoking novels have captivated readers worldwide. With a unique ability to weave intricate narratives exploring themes of globalization, colonialism, and cultural identity, Ghosh's works have garnered prestigious awards and critical acclaim. His novels, translated into numerous languages, have not only entertained but have also sparked important conversations about the complexities of the human experience in a rapidly changing world. Ghosh's literary prowess and insightful exploration of global issues have cemented his status as a literary titan, leaving an indelible mark on the world of contemporary fiction. Through his writing, he has provided a profound and nuanced perspective on the interplay between cultural identities, challenging readers to confront their own preconceptions and embrace the richness of diversity.",
  },
  {
    name: "Gautam Gambhir",
    message:
      "Gautam Gambhir is a fearless cricketer known for his aggressive batting and mental toughness. As a two-time World Cup winner, he has etched his name in the annals of Indian cricket history with his match-winning performances. Gambhir's ability to thrive under pressure and his unwavering determination have earned him the respect and admiration of both fans and fellow players alike. His leadership qualities and dedication to the sport have made him an invaluable asset to the Indian team, inspiring young cricketers to embrace the challenges of the game and strive for excellence. Gambhir's resilience and never-say-die attitude have made him a role model for aspiring athletes, demonstrating that with hard work and perseverance, even the loftiest goals can be achieved.",
  },
  {
    name: "Shilpa Shetty Kundra",
    message:
      "Shilpa Shetty Kundra is a versatile actress and a leading figure in the Indian fitness industry. Her dedication to health and wellness has inspired millions to lead healthier lives. Through her entrepreneurial ventures and advocacy for yoga, Shetty Kundra has played a pivotal role in promoting fitness awareness and encouraging individuals to prioritize their well-being. Her infectious enthusiasm and commitment to her craft have earned her a loyal following, as she continues to inspire and motivate people to embrace a holistic approach to living. Shetty Kundra's influence extends beyond the realms of fitness and entertainment; she is a beacon of positivity and self-confidence, empowering individuals to embrace their authentic selves and celebrate their unique journeys.",
  },
  {
    name: "Sushma Swaraj (1952-2019)",
    message:
      "Sushma Swaraj was a dedicated politician and a strong advocate for India's interests on the global stage. Serving as the country's External Affairs Minister, she earned immense respect and admiration for her active social media presence and quick response to citizens' needs. Swaraj's commitment to public service and her unwavering dedication to addressing the concerns of her constituents set her apart as a leader truly invested in the well-being of the people she served. Her active engagement on social media platforms demonstrated her understanding of the evolving communication landscape and her desire to connect directly with the citizens. Swaraj's legacy is one of compassion, integrity, and a tireless pursuit of upholding India's interests on the world stage.",
  },
  {
    name: "A.P.J. Abdul Kalam (1931-2015)",
    message:
      "Affectionately known as the 'Missile Man of India,' A.P.J. Abdul Kalam was a visionary scientist, engineer, and the 11th President of India. He played a pivotal role in India's space program and nuclear missile development, inspiring generations with his scientific leadership and commitment to education. Kalam's humble beginnings and his rise to become one of India's most revered figures serve as a testament to the power of hard work, determination, and an unwavering pursuit of knowledge. His contributions to the nation's scientific and technological advancement have left an indelible mark, but it is his ability to inspire and motivate young minds that truly sets him apart. Kalam's vision for a prosperous and developed India, coupled with his emphasis on the importance of education and moral values, has made him a beloved figure across the country.",
  },
  {
    name: "Rani Mukerji",
    message:
      "Rani Mukerji is a talented and versatile actress known for her powerful performances and dedication to her craft. A recipient of numerous film awards, she has played diverse roles across genres, captivating audiences with her talent and ability to immerse herself in her characters. Mukerji's performances are not mere exhibitions of acting but profound explorations of the human psyche, leaving an indelible mark on the hearts and minds of viewers. Her ability to bring depth and nuance to even the most challenging roles has earned her critical acclaim and a legion of fans. Beyond her acting prowess, Mukerji's commitment to her craft and her willingness to take on unconventional roles have made her a trailblazer in the Indian film industry.",
  },
  {
    name: "Arvind Kejriwal",
    message:
      "Arvind Kejriwal is a social activist and politician who has dedicated his efforts to addressing corruption and championing social welfare programs. As the Chief Minister of Delhi, he has gained widespread recognition for his focus on anti-corruption measures and his commitment to improving the lives of citizens. Kejriwal's rise to political prominence is a testament to the power of grassroots movements and the collective voice of the people. His determination to fight against systemic corruption and his unwavering stance on transparency have resonated with citizens across the nation. Kejriwal's advocacy for social welfare programs, such as education and healthcare, reflects his belief in the importance of empowering citizens and ensuring access to essential services for all.",
  },
  
  {
    name: "Sarojini Naidu (1879-1949)",
    message:
      "A celebrated poet, political activist, and educator, Sarojini Naidu was a prominent figure in India's freedom struggle. Known as the 'Nightingale of India' for her lyrical poetry, she also served as the first woman president of the Indian National Congress, advocating for equality and social justice.",
  },
  // Continued from previous...

{
  name: "Mithali Raj",
  message:
    "A legendary cricketer and the highest run-scorer in women's international cricket, Mithali Raj is a role model for aspiring athletes. Known for her elegant batting style and leadership qualities, she has captained the Indian women's cricket team for a record-breaking tenure, inspiring a generation of young girls to pursue cricket.",
},
{
  name: "Vikram Chandra",
  message:
    "A critically acclaimed author, Vikram Chandra is known for his captivating novels like 'Sacred Games' and 'Love and longing in Bombay.' His works explore social and cultural complexities, garnering international recognition and showcasing contemporary Indian literature on a global stage.",
},
{
  name: "Ilayaraja",
  message:
    "A legendary music composer, Ilayaraja has revolutionized Indian film music. He is known for his prolific output and unique blend of traditional and western influences, creating iconic soundtracks that continue to resonate with audiences across generations.",
},
{
  name: "Shabana Azmi",
  message:
    "A powerful actress and social activist, Shabana Azmi is a recipient of numerous film awards. Known for her dedication to portraying strong female characters and advocating for social change, she is a respected voice in Indian cinema and society.",
},
{
  name: "Mira Nair",
  message:
    "A renowned filmmaker, Mira Nair has directed acclaimed films like 'Salaam Bombay!' and 'Monsoon Wedding.' Her works explore social and cultural themes, often addressing issues faced by marginalized communities. She has garnered international recognition for her storytelling and contribution to Indian cinema.",
},
{
  name:  "Satya Nadella",
  message:
    "A visionary business leader, Satya Nadella is the CEO of Microsoft. He is credited with transforming the company's focus towards cloud computing and artificial intelligence, leading to its resurgence in the tech industry. His success story inspires aspiring entrepreneurs and business leaders globally.",
},
{
  name: "Chetan Bhagat",
  message:
    "A popular author, Chetan Bhagat is known for his relatable novels that explore themes of youth, love, and career aspirations. His work has resonated with young Indian readers and sparked conversations about social and educational issues.",
},
{
  name: "P.T. Usha",
  message:
    "A legendary athlete known as the 'Golden Girl' of Indian athletics, P.T. Usha is a multiple Asian Games gold medalist and Olympic finalist. Her dedication and perseverance inspired a generation of athletes and paved the way for greater participation by women in Indian sports.",
},
{
  name: "Saumitra Chatterjee (1935-2020)",
  message:
    "A celebrated thespian and social activist, Saumitra Chatterjee was a renowned figure in Bengali theatre. He captivated audiences with his powerful performances and dedication to his craft. Known for his social activism and humanitarian work, he left an enduring legacy.",
},
{
  name: "R. K. Laxman (1921-2017)",
  message:
    "A legendary cartoonist, R. K. Laxman is best known for his iconic creation 'The Common Man' in the Times of India. His witty and insightful cartoons chronicled Indian society and politics for decades, making him a household name and a voice for the common people.",
},
// Continued from previous...

{
  name: "Buddhadeb Dasgupta (1946-2017)",
  message:
    "A critically acclaimed filmmaker, Buddhadeb Dasgupta is known for his thought-provoking films that explore themes of alienation, desire, and social realities. His work garnered international recognition, showcasing the artistic depth of Indian cinema.",
},
{
  name: "A.R. Rahman (Singer)",
  message:
    "Beyond composing music, A.R. Rahman is also a gifted singer with a unique voice. He has lent his vocals to many of his own compositions, adding another layer of depth and emotion to his soundtracks.",
},
{
  name: "Manoj Bajpayee",
  message:
    "A versatile actor known for his intense performances, Manoj Bajpayee has received numerous awards for his work. He embodies a wide range of characters, captivating audiences with his dedication to the craft.",
},
{
  name: "Saina Nehwal",
  message:
    "A badminton champion, Saina Nehwal is a former World No. 1 and Olympic medalist. Her relentless pursuit of excellence and aggressive playing style have inspired a generation of young badminton players in India.",
},
{
  name: "Anand Mahindra",
  message:
    "A visionary industrialist, Anand Mahindra is the chairman of Mahindra Group, one of India's leading conglomerates. He is known for his innovative approach to business and commitment to social responsibility, driving positive change in India's economy.",
},
{
  name: "Amitav Ghosh (Economist)",
  message:
    "Not to be confused with the author Amitabh Ghosh, Amitav Ghosh is a renowned economist known for his work on poverty and development. His research and advocacy have contributed to shaping policies aimed at alleviating poverty and promoting economic growth in India.",
},
{
  name: "Kangana Ranaut",
  message:
    "A talented and outspoken actress, Kangana Ranaut is known for her powerful performances and unconventional roles. She has received numerous awards and established herself as a force to be reckoned with in Indian cinema.",
},
{
  name: "Vishwanathan Anand",
  message:
    "A chess prodigy and five-time World Chess Champion, Vishwanathan Anand is a legend in the world of chess. His strategic brilliance and calm demeanor have inspired aspiring chess players and showcased Indian excellence on the global stage.",
},
{
  name: "Javed Akhtar",
  message:
    "A renowned lyricist and screenwriter, Javed Akhtar is a recipient of numerous film awards. He has penned iconic songs that have become an integral part of Indian cinema, leaving a lasting impact on popular culture.",
},
{
  name: "Smita Patil (1950-1986)",
  message:
    "A celebrated actress known for her powerful performances and commitment to social causes, Smita Patil left an indelible mark on Indian cinema. Though her career was tragically cut short, she continues to inspire generations of aspiring actresses.",
},
{
  name: "Barack Obama",
  message:
    "The 44th President of the United States, Barack Obama is a global icon known for his eloquence, leadership, and commitment to social justice. He is the first African-American president of the US and has inspired millions worldwide.",
},
{
  name: "Oprah Winfrey",
  message:
    "A media mogul, philanthropist, and talk show host, Oprah Winfrey is a household name. Her influential talk show tackled important issues and empowered viewers. Now, through her media empire, she continues to inspire and entertain audiences globally.",
},
{
  name: "Lionel Messi",
  message:
    "Widely considered one of the greatest footballers of all time, Lionel Messi is a seven-time Ballon d'Or winner. His exceptional talent and dazzling skills have captivated fans worldwide, making him a true sporting legend.",
},
{
  name: "Cristiano Ronaldo",
  message:
    "A five-time Ballon d'Or winner and rival of Lionel Messi, Cristiano Ronaldo is another footballing superstar. His dedication to fitness and relentless pursuit of excellence have made him a global icon and a source of inspiration for aspiring athletes.",
},
{
  name: "Beyoncé",
  message:
    "A Grammy Award-winning singer, songwriter, and performer, Beyoncé is a global superstar. Known for her powerful vocals, captivating stage presence, and innovative music videos, she has redefined pop music and empowered women worldwide.",
},
{
  name: "Elon Musk",
  message:
    "A visionary entrepreneur and engineer, Elon Musk is the CEO of Tesla and SpaceX. He is known for his ambitious projects aimed at revolutionizing transportation and space exploration, pushing the boundaries of innovation and inspiring a generation of dreamers.",
},
{
  name: "J.K. Rowling",
  message:
    "The author of the Harry Potter series, J.K. Rowling is a literary phenomenon. Her books have captivated readers of all ages worldwide, sparking a love of reading and inspiring countless aspiring writers.",
},
{
  name: "Stephen Hawking (1942-2018)",
  message:
    "A world-renowned physicist and cosmologist, Stephen Hawking made groundbreaking discoveries about black holes and the origins of the universe. Despite his physical limitations, he became a global science icon, inspiring awe and curiosity about the cosmos.",
},
{
  name: "Nelson Mandela (1918-2013)",
  message:
    "A South African anti-apartheid revolutionary, political leader, and philanthropist, Nelson Mandela is a global symbol of peace and reconciliation. He spent 27 years in prison for his activism but emerged to lead South Africa toward democracy, inspiring generations of freedom fighters.",
},
{
  name: "Leonardo da Vinci (1452-1519)",
  message:
    "A true Renaissance man, Leonardo da Vinci was a painter, sculptor, architect, scientist, engineer, and inventor. His iconic works like the Mona Lisa and The Last Supper continue to inspire awe centuries later. He is a testament to human potential and the pursuit of knowledge.",
},
// ... Add 10 more following the same format
{
  name: "Stephen King",
  message:
  "A prolific and influential horror writer, Stephen King is a master of suspense. His chilling novels like The Shining and Carrie have captivated readers for decades, solidifying his position as a king of the horror genre.",
  },
  {
  name: "William Shakespeare (1564-1616)",
  message:
  "A revered playwright and poet, William Shakespeare is considered the greatest writer in the English language. His timeless plays like Hamlet, Romeo and Juliet, and Macbeth continue to be performed worldwide, showcasing the enduring power of his words.",
  },
  {
  name: "Nelson Mandela (1918-2013)",
  message:
  "(This entry is a duplicate. You can remove one or create a new entry for a different celebrity.)",
  },
  {
  name: "Barack Obama",
  message:
  "(This entry is a duplicate. You can remove one or create a new entry for a different celebrity.)",
  },
  {
  name: "Jackie Chan",
  message:
  "A renowned martial arts actor, filmmaker, and stuntman, Jackie Chan is a global action movie star. Known for his high-octane stunts and comedic timing, he has entertained audiences for decades, becoming a beloved figure in cinema.",
  },
  {
  name: "Rihanna",
  message:
  "A Barbadian singer, songwriter, and businesswoman, Rihanna is a global pop icon. Known for her powerful vocals",
  },
  {
    name: "Dhanush",
    message:
      "A versatile actor and filmmaker from South Indian cinema, Dhanush is known for his captivating performances and powerful screen presence. He has received numerous awards and established himself as a leading figure in the Tamil film industry.",
  },
  {
    name: "Deepika Padukone",
    message:
      "A leading actress in Bollywood, Deepika Padukone is known for her beauty, talent, and dedication to her craft. She has starred in numerous commercially successful films and is a vocal advocate for mental health awareness, inspiring many.",
  },
  {
    name: "Alia Bhatt",
    message:
      "A rising star in Bollywood, Alia Bhatt has garnered critical acclaim for her diverse roles and powerful performances. She is a recipient of numerous film awards and a role model for young aspiring actresses.",
  },
  {
    name: "R. D. Burman (1939-1994)",
    message:
      "A legendary music composer, R. D. Burman (Pancham) revolutionized Indian film music. His innovative and catchy compositions continue to resonate with audiences, leaving an indelible mark on Bollywood music history.",
  },
  {
    name: "Amitabh Bachchan (Singer)",
    message:
      "Beyond acting, Amitabh Bachchan is also a gifted singer. He has lent his baritone voice to many songs in his films, adding another layer of depth to his performances.",
  },
  {
    name: "Shobha Dea",
    message:
      "A renowned author and columnist, Shobha Dea is known for her bold and unconventional writing style. Her works explore contemporary Indian society and relationships, sparking conversations and challenging social norms.",
  },
  {
    name: "Aamir Khan",
    message:
      "A leading actor known for his versatility and commitment to social causes, Aamir Khan is a recipient of numerous film awards. He is known for his meticulous approach to filmmaking and often tackles thought-provoking themes through his movies.",
  },
  {
    name: "Shahrukh Khan",
    message:
      "One of the biggest stars in Bollywood, Shahrukh Khan is known as the 'King of Romance.' He has captivated audiences with his charming personality and iconic roles, establishing himself as a global icon of Indian cinema.",
  },
  {
    name: "Madhuri Dixit",
    message:
      "A renowned actress and dancer, Madhuri Dixit is known for her grace and captivating performances. She has starred in numerous successful films and continues to inspire aspiring dancers and actresses.",
  },
  {
    name: "Sushmita Sen",
    message:
      "A former Miss Universe and actress, Sushmita Sen is a strong and independent woman who inspires many. She has carved her own path in the film industry and advocates for social causes, empowering women to achieve their dreams.",
  },
  // ... Add 15 more following the same format
  {
    name: "Hrithik Roshan",
    message:
      "A leading actor known for his sculpted physique and dedication to fitness. He has showcased remarkable talent in diverse roles, captivating audiences with his performances.",
  },
  {
    name: "Kareena Kapoor Khan",
    message:
      "A versatile actress known for her bold choices and powerful performances. She has established herself as a leading figure in Bollywood and continues to inspire aspiring actresses.",
  },
  {
    name: "Ajay Devgn",
    message:
      "A versatile actor, director, and producer known for his action-oriented roles and dedication to filmmaking. He has received numerous awards and is a prominent figure in the Indian film industry.",
  },
  {
    name: "Anil Kapoor",
    message:
      "A veteran actor known for his dedication to his craft and his ability to portray a wide range of characters. He has worked in both Bollywood and Hollywood, establishing himself as a global Indian star.",
  },
  {
    name: "Priyanka Chopra Jonas (Singer)",
    message:
      "Beyond acting, Priyanka Chopra Jonas is also a talented singer. She has released music internationally and showcased her versatility as an artist.",
  },
  {
    name: "Rani Rampal",
    message:
      "A renowned chef who has gained international recognition for her take on Indian cuisine. She promotes healthy and flavorful dishes, showcasing the diversity of Indian food culture.",
  },
  {
    name: "Zakir Khan",
    message:
      "A stand-up comedian known for his witty observations and relatable humor. He has garnered a large following online and established himself as a leading figure in the Indian comedy scene.",
  },
  {
    name: "Vir Das",
    message:
      "A stand-up comedian and actor known for his sharp wit and social commentary. He tackles relevant issues through his comedy, sparking conversations and making audiences laugh.",
  },
  {
    name: "Rohit Sharma",
    message:
      "A prolific opening batsman and a vital member of the Indian cricket team, Rohit Sharma is known for his aggressive batting style and record-breaking performances. He holds the record for the highest individual score in ODIs (264) and numerous other batting feats.",
  },
  {
    name: "Jasprit Bumrah",
    message:
      "A leading fast bowler known for his accuracy and pace, Jasprit Bumrah is a vital part of the Indian bowling attack. He has risen to the top of the international rankings and is a crucial player in all formats of the game.",
  },
  {
    name: "Ravindra Jadeja",
    message:
      "A versatile all-rounder who excels in batting, bowling, and fielding, Ravindra Jadeja is an invaluable asset to the Indian team. He can adapt to various situations and is known for his exceptional fielding skills.",
  },
  {
    name: "Mithali Raj",
    message:
      "A legendary cricketer and the highest run-scorer in women's ODIs, Mithali Raj is a role model for aspiring female cricketers in India. Her dedication and leadership have inspired a generation of women to pursue cricket.",
  },
  {
    name: "VVS Laxman",
    message:
      "Renowned for his elegant batting and match-winning performances, VVS Laxman is a former Indian cricketer who played a pivotal role in India's historic Test victory against Australia in 2001. He is known for his mental fortitude and ability to score crucial runs in pressure situations.",
  },
  {
    name: "Sourav Ganguly (Captain)",
    message:
      "A former Indian captain known for his aggressive leadership and role in ushering in a new era for Indian cricket, Sourav Ganguly is a respected figure in the sport. He transformed the team's mentality and instilled a winning spirit, paving the way for future successes.",
  },
  {
    name: "Jhulan Goswami",
    message:
      "The highest wicket-taker in women's ODIs, Jhulan Goswami is a legendary fast bowler known for her swing bowling and pace. She has been a key player in the Indian women's cricket team for over two decades, inspiring young female bowlers.",
  },
  {
    name: "Kapil Dev",
    message:
      "A legendary all-rounder and former captain of the Indian cricket team, Kapil Dev is an iconic figure in Indian cricket history. He led India to its first Cricket World Cup victory in 1983, inspiring a nation and leaving an enduring legacy.",
  },
  {
    name: "Anil Kumble",
    message:
      "A former Indian cricketer known for his leg spin bowling and leadership qualities, Anil Kumble is the leading wicket-taker for India in Test cricket. He is also known for his calm demeanor and strategic mind on the field.",
  },
  {
    name: "Harbhajan Singh",
    message:
      "A leading off-spin bowler known for his aggressive style and wicket-taking ability, Harbhajan Singh has been a key player in the Indian spin bowling attack for many years. He has played a significant role in India's victories in various tournaments.",
  },
  
];

module.exports = mockChats;

