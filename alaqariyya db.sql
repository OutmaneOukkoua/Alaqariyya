-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : dim. 24 nov. 2024 à 13:51
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `alaqariyya`
--

-- --------------------------------------------------------

--
-- Structure de la table `clickcount_stats`
--

CREATE TABLE `clickcount_stats` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `property_id` int(11) DEFAULT NULL,
  `click_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `clickcount_stats`
--

INSERT INTO `clickcount_stats` (`id`, `property_id`, `click_time`) VALUES
(1, 124, '2024-11-24 11:37:27'),
(2, 126, '2024-11-24 11:37:29'),
(3, 103, '2024-11-24 11:37:38'),
(4, 104, '2024-11-24 11:37:41'),
(5, 107, '2024-11-24 11:37:44');

-- --------------------------------------------------------

--
-- Structure de la table `contact_submissions`
--

CREATE TABLE `contact_submissions` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `contact_submissions`
--

INSERT INTO `contact_submissions` (`id`, `name`, `email`, `phone`, `subject`, `message`, `created_at`) VALUES
(21, 'fgfgd', 'fhgdffh@gmail.com', 'dfhghh', 'ss', 'fdhfg', '2024-08-28 18:52:51');

-- --------------------------------------------------------

--
-- Structure de la table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title_ar` varchar(255) NOT NULL,
  `title_en` varchar(255) DEFAULT NULL,
  `title_fr` varchar(255) DEFAULT NULL,
  `title_es` varchar(255) DEFAULT NULL,
  `title_de` varchar(255) DEFAULT NULL,
  `title_nl` varchar(255) DEFAULT NULL,
  `content_ar` longtext DEFAULT NULL,
  `content_en` longtext DEFAULT NULL,
  `content_fr` longtext DEFAULT NULL,
  `content_es` longtext DEFAULT NULL,
  `content_de` longtext DEFAULT NULL,
  `content_nl` longtext DEFAULT NULL,
  `image_url` varchar(255) NOT NULL,
  `published_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `news`
--

INSERT INTO `news` (`id`, `title_ar`, `title_en`, `title_fr`, `title_es`, `title_de`, `title_nl`, `content_ar`, `content_en`, `content_fr`, `content_es`, `content_de`, `content_nl`, `image_url`, `published_at`) VALUES
(39, 'جديد ترامب وفكرة ماسك.. وزارة بوزيرين لكفاءة الحكومة', 'New Trump and the idea of ​​a mask .. a minister of minister for government efficiency', 'New Trump et l\'idée d\'un masque.', 'Nuevo Trump y la idea de una máscara. Un Ministro de Ministro de Eficiencia del Gobierno', 'New Trump und die Idee einer Maske. Ein Minister des Ministers für Regierungseffizienz', 'Nieuwe Trump en het idee van een masker .. een minister van Minister van Efficiëntie van de regering', 'الرئيس العائد الذي اعتاد أن يكون مثيرا للجدل، كان وفيا لعادته وهو ما ظهر من التعيينات التي بدأ الإعلان عنها هذا الأسبوع تمهيدا لتسلمه السلطة رسميا في الـ20 من ينايركانون الثاني المقبل.\r\n\r\nفكثير من الشخصيات التي اختارها ترامب لمناصب كبرى تخرج عن دائرة السياسيين التقليديين وهي إما أنها تناسب شخصيته المتقلبة أو لا تقل عنه إثارة للجدل سواء بتوجهاتها أو حتى بجدارتها بالنظر إلى خلفياتها السابقة، وذلك وفقا لوسائل إعلام أميركية ودولية.\r\n\r\nمن أبرز الأمثلة على ذلك بيتر هيغسيث 44 عاما الذي اختير وزيرا للدفاع، في قرار فاجأ حتى أعضاء في حملة ترامب نفسه وصفوه بالمفاجئ بل والصادم.\r\n\r\nفرغم أن هيغسيث كان جنديا سابقا شارك في الحرب الأميركية على كل من أفغانستان والعراق، فإنه تحول إلى العمل بالإعلام في السنوات الأخيرة فالتحق بشبكة فوكس نيوز وأصبح مقدما مشاركا لأحد برامجها.\r\n\r\nومع الجدل بشأن المناصب السياسية والعسكرية الكبرى، جاء القرار المتعلق بإيلون ماسك، أغنى رجل في العالم، ليخطف جانبا كبيرا من الأضواء، فما هي قصة ماسك وعلاقته بترامب وما هو منصبه الجديد.', 'The return president, who used to be controversial, was loyal to his habit, which appeared from the appointments that began to be announced this week in preparation for the official receipt of the authority on the 20th of January.\r\n\r\n Many of the characters chosen by Trump for major positions departed from the circle of traditional politicians, which are either suitable for his volatile personality or no less controversial, whether with their orientations or even their merit in view of her previous backgrounds, according to American and international media.\r\n\r\n One of the most prominent examples of this is Peter Higseth, 44, who was chosen as defense minister, in a decision that surprised even Trump\'s campaign, describing him as sudden and even shocking.\r\n\r\n Although Higseth was a former soldier who participated in the American war on both Afghanistan and Iraq, it has turned to work in the media in recent years, so he joined Fox News and became a participant of one of its programs.\r\n\r\n With the controversy over the major political and military positions, the decision related to Elon Musk, the richest man in the world, came to kidnap a large part of the limelight. What is the story of Musk and his relationship with Trump and what is his new position.', 'Le président du retour, qui était controversé, était fidèle à son habitude, qui est apparue par les nominations qui ont commencé à être annoncées cette semaine en préparation de la réception officielle de l\'autorité le 20 janvier.\r\n\r\n De nombreux personnages choisis par Trump pour des postes majeurs se sont éloignés du cercle des politiciens traditionnels, qui conviennent soit à sa personnalité volatile ou non moins controversée, que ce soit avec leurs orientations ou même leur mérite en vue de ses antécédents précédents, selon American et médias internationaux.\r\n\r\n L\'un des exemples les plus importants de ceci est Peter Higseth, 44 ans, qui a été choisi comme ministre de la Défense, dans une décision qui a surpris même la campagne de Trump, le décrivant comme soudain et même choquant.\r\n\r\n Bien que Higseth ait été un ancien soldat qui a participé à la guerre américaine contre l\'Afghanistan et l\'Irak, il s\'est tourné pour travailler dans les médias ces dernières années, il a donc rejoint Fox News et est devenu un participant de l\'un de ses programmes.\r\n\r\n Avec la controverse sur les principales positions politiques et militaires, la décision liée à Elon Musk, l\'homme le plus riche du monde, est venu kidnapper une grande partie des projecteurs. Nouvelle position.', 'El presidente de regreso, que solía ser controvertido, era leal a su hábito, que apareció a partir de los nombramientos que comenzaron a anunciarse esta semana en preparación para la recepción oficial de la autoridad el 20 de enero.\r\n\r\n Muchos de los personajes elegidos por Trump para las principales posiciones partieron del círculo de los políticos tradicionales, que son adecuados para su personalidad volátil o no menos controvertido, ya sea con sus orientaciones o incluso su mérito en vista de sus antecedentes anteriores, según los estadounidenses y los estadounidenses y medios internacionales.\r\n\r\n Uno de los ejemplos más destacados de esto es Peter Higseth, de 44 años, quien fue elegido como Ministro de Defensa, en una decisión que sorprendió incluso la campaña de Trump, describiéndolo como repentino e incluso impactante.\r\n\r\n Aunque Higseth era un ex soldado que participó en la Guerra Americana en Afganistán e Irak, se ha convertido en trabajar en los medios en los últimos años, por lo que se unió a Fox News y se convirtió en un participante de uno de sus programas.\r\n\r\n Con la controversia sobre las principales posiciones políticas y militares, la decisión relacionada con Elon Musk, el hombre más rico del mundo, llegó a secuestrar una gran parte del centro de atención. nueva posición.', 'Der Rückkehrpräsident, der früher kontrovers war, war seiner Gewohnheit treu, die aus den Ernennungen erschien, die diese Woche zur Vorbereitung auf den offiziellen Erhalt der Behörde am 20. Januar angekündigt wurden.\r\n\r\n Viele der von Trump für wichtigen Positionen ausgewählten Charaktere starben vom Kreis traditioneller Politiker ab, die entweder für seine volatile Persönlichkeit oder nicht weniger umstritten sind, sei es mit ihren Orientierungen oder sogar ihren Verdienst im Hinblick auf ihre früheren Hintergründe, laut American und American and Internationale Medien.\r\n\r\n Eines der bekanntesten Beispiele dafür ist der 44 -jährige Peter Higseth, der als Verteidigungsminister ausgewählt wurde, in einer Entscheidung, die sogar Trumps Kampagne überraschte und ihn als plötzlich und sogar schockierend beschrieb.\r\n\r\n Obwohl Higseth ein ehemaliger Soldat war, der sowohl Afghanistan als auch den Irak am amerikanischen Krieg teilnahm, hat er sich in den letzten Jahren in die Medien zugewandt, also wechselte er zu Fox News und wurde Teilnehmer eines seiner Programme.\r\n\r\n Mit der Kontroverse um die wichtigsten politischen und militärischen Positionen kam die Entscheidung mit Elon Musk, dem reichsten Mann der Welt, einen großen Teil des Rampenlichts zu entführen. Neue Position.', 'De terugkeerpresident, die controversieel was, was loyaal aan zijn gewoonte, die verscheen uit de benoemingen die deze week begonnen te worden aangekondigd ter voorbereiding op de officiële ontvangst van de autoriteit op 20 januari.\r\n\r\n Veel van de door Trump gekozen personages voor belangrijke posities vertrokken uit de cirkel van traditionele politici, die geschikt zijn voor zijn vluchtige persoonlijkheid of niet minder controversieel, hetzij met hun oriëntaties of zelfs hun verdienste in het oog op haar vorige achtergronden, volgens de Amerikaanse en Internationale media.\r\n\r\n Een van de meest prominente voorbeelden hiervan is Peter Higseth, 44, die werd gekozen als minister van Defensie, in een beslissing die zelfs de campagne van Trump verbaasde en hem beschreef als plotseling en zelfs schokkend.\r\n\r\n Hoewel Higseth een voormalige soldaat was die deelnam aan de Amerikaanse oorlog op zowel Afghanistan als Irak, is het de afgelopen jaren in de media gewend, dus werd hij lid van Fox News en werd hij deelnemer aan een van zijn programma\'s.\r\n\r\n Met de controverse over de belangrijkste politieke en militaire posities kwam de beslissing met betrekking tot Elon Musk, de rijkste man ter wereld, een groot deel van de schijnwerpers te ontvoeren. Nieuwe positie.', 'ilon.jpg', '2024-11-14 11:08:45'),
(40, 'كيف خسر أسطورة الملاكمة مايك تايسون أمام مبتدئ عشريني؟', 'How did the boxing legend Mike Tyson lose in front of a twentieth beginner?', 'Comment la légende de la boxe Mike Tyson a-t-elle perdu devant un vingtième débutant?', '¿Cómo perdió la leyenda del boxeo Mike Tyson frente a un principiante vigésimo?', 'Wie hat die Boxlegende Mike Tyson vor einem zwanzigsten Anfänger verloren?', 'Hoe verloor de bokslegende Mike Tyson voor een twintigste beginner?', 'ترك صانع المحتوى الذي تحول إلى ملاكم، جيك بول، وصمة عار دائمة على إرث الملاكم وبطل الوزن الثقيل لمرتين مايك تايسون، بعد تحقيقه فوزاً في مباراة وصفت بالباهتة، أمام 70 ألف مشجع في تكساس، ممن أصابتهم خيبة الأمل على إثر النتيجة، كذلك أمام الملايين ممن شاهدوا المباراة المثيرة للجدل على شبكة نتفليكس المعروفة.\r\n\r\nبدا تايسون وكأنه ظلاً لشخصيته القديمة، كما هو المتوقع من رجل يبلغ من العمر 58 عاماً ولم ينافس على المستوى الاحترافي منذ 19 عاماً.\r\n\r\nأما بول، الذي يبلغ 27 عاماً، فعلى الرغم من أنه مبتدئ في الملاكمة إلا أنه رياضي للغاية، وعمره صغير جدا بالنسبة لتايسون، فقد أبقى خصمه على مسافة بعيدة، وسدد لكمات دقيقة في نزال من ثماني جولات مدة كل منها دقيقتين، فيما بدا تايسون بطيئاً وخاملاً.\r\n\r\nحصل تايسون على استقبال الأبطال قبل القتال، ولكن كانت هناك صيحات استهجان كبيرة على أدائه مع اقتراب النزال من نهايته، فيما غادر بعض المشجعين قبل إعلان نتائج الحكام، والتي جاءت على الترتيب التالي: 8072 و7973 و7973.\r\nإن الإدراك المتأخر لما حصل هو أمر مدهش، إلا أن النتيجة ليست مفاجئة، وستشجع هؤلاء النقاد الذين وجدوا في النتيجة فرصة للسخرية من الملاكمة.\r\n\r\nفيما قال تايسون إن قلبه لم يكن في هذه الرياضة بعد الخسارة التي تكبدها أمام كيفن ماكبرايد في عام 2005.\r\n\r\nمنذ البداية كان من الواضح أن هذا رجل يقترب من الستينيات من عمره، ولا يزال يتمتع ببعض القوة ولكن ليس لديه القدرة على التحمل.\r\n\r\nكان الشعور العام هو أنه لكي يفوز تايسون، فإنه يحتاج إلى تنحية بول مبكراً من النزال، وعلى الرغم من أنه ضربه بيده اليمنى في المرة الأولى، إلا أن بول بدأ في الاستجابة بشكل مدروس مع اللكمات، فيما ضرب تايسون بيده اليسرى في المرة الثالثة.\r\n\r\nوبدأ بول الذي كان يرتدي أغلى شورت في العالم في إثارة إعجاب رجل يكبره بـ 31 عاماً.\r\n\r\nكان تايسون، الذي كان يرتدي دعامة سوداء فوق ركبته اليمنى، يحرك رأسه بسرعة لجعل بول يخطئ، لكن مع ذلك، وفي الشوط الخامس، اندفع تايسون لإلقاء ضربة لكنه أخطأ في تقدير مسافتها نحو قدم واحدة على الأقل، ما يوضح مدى الفارق الذي أحدثه تقدم العمر.\r\n\r\nشعر الملاكم المخضرم بمزيد من الضرر في الجولة السابعة عندما استقبل لكمة من اليسار أصابت صدغه، وعند هذه النقطة، بدا معظم المشجعين متحمسين لسماع الجرس الأخير.\r\n', 'The content maker that turned into a boxer, Jake Paul, left a permanent stigma on the legacy of the boxer and the heavyweight hero twice Mike Tyson, after achieving a victory in a match described as fading, in front of 70 thousand fans in Texas, who were disappointed by the result, as well as in front of millions Those who watched the controversial match on the well -known Netflix network.\r\n\r\n Tyson seemed to be a shadow of his old character, as expected from a 58 -year -old man and has not competed at the professional level for 19 years.\r\n\r\n As for Paul, who is 27 years old, although he is a beginner in boxing, he is very athlete, and his age is very small for Tyson, he kept his opponent at a distance, and he paid accurate punches in a battle of eight rounds for two minutes, while Tyson seemed slow. And idle.\r\n\r\n Tyson obtained the reception of the heroes before the fighting, but there were great shouts on his performance as the fight approached its end, while some fans left before announcing the results of the referees, which came in the following order: 8072, 7973 and 7973.\r\n The late perception of what happened is amazing, but the result is not surprising, and you will encourage these critics who found in the result an opportunity to ridicule boxing.\r\n\r\n While Tyson said his heart was not in this sport after the loss he incurred against Kevin McBraide in 2005.\r\n\r\n From the beginning it was clear that this is a man approaching the sixties, and still has some strength but he has no endurance.\r\n\r\n The general feeling was that in order for Tyson to win, he needed to remove Paul early from the fight, and although he hit him with his right hand the first time, Paul began to respond in a deliberate way with punches, while Tyson hit his left hand the third time.\r\n\r\n Paul, who was wearing the most expensive shorts in the world, began the admiration of a 31 -year -old man.\r\n\r\n Tyson, who was wearing a black pillar over his right knee, was moving his head quickly to make Paul make mistakes, but with that, in the fifth half, Tyson rushed to a blow but made a mistake in estimating her distance towards at least one foot, showing the extent of the difference he made age .\r\n\r\n The veteran boxer felt more damage in the seventh round when he received a punch from the left hitting his temple, and at this point, most fans looked excited to hear the last bell.', 'Le fabricant de contenu qui s\'est transformé en boxeur, Jake Paul, a laissé une stigmatisation permanente sur l\'héritage du boxeur et du héros poids lourd deux fois Mike Tyson, après avoir remporté une victoire dans un match décrit comme une décoloration, devant 70 000 fans au Texas, qui ont été déçus par le résultat, ainsi que devant des millions ceux qui ont regardé le match controversé sur le réseau Netflix bien connu.\r\n\r\n Tyson semblait être l\'ombre de son ancien personnage, comme prévu d\'un homme de 58 ans et n\'a pas concouru au niveau professionnel pendant 19 ans.\r\n\r\n Quant à Paul, qui a 27 ans, bien qu\'il soit un débutant en boxe, il est très athlète et son âge a très petit pour Tyson, il a gardé son adversaire à distance et il a payé des coups de poing précis dans une bataille de huit Rounds pendant deux minutes, tandis que Tyson semblait lent.\r\n\r\n Tyson a obtenu la réception des héros avant les combats, mais il y a eu de grands cris sur sa performance alors que le combat a approché sa fin, tandis que certains fans sont partis avant d\'annoncer les résultats des arbitres, qui sont venus dans l\'ordre suivant: 8072, 7973 et 7973 .\r\n La perception tardive de ce qui s\'est passé est incroyable, mais le résultat n\'est pas surprenant, et vous encouragerez ces critiques qui ont trouvé dans le résultat une opportunité de ridiculiser la boxe.\r\n\r\n Alors que Tyson a déclaré que son cœur n\'était pas dans ce sport après la défaite qu\'il a subi contre Kevin McBraide en 2005.\r\n\r\n Dès le début, il était clair qu\'il s\'agit d\'un homme qui approchait des années 60, et a encore une certaine force mais il n\'a pas d\'endurance.\r\n\r\n Le sentiment général était que pour que Tyson gagne, il devait retirer Paul tôt du combat, et bien qu\'il l\'ait frappé avec sa main droite la première fois, Paul a commencé à répondre de manière délibérée avec des coups de poing, tandis que Tyson a frappé son main gauche la troisième fois.\r\n\r\n Paul, qui portait le short le plus cher du monde, a commencé l\'admiration d\'un homme de 31 ans.\r\n\r\n Tyson, qui portait un pilier noir sur son genou droit, bougeait rapidement la tête pour faire faire des erreurs, mais avec cela, dans la cinquième mi-temps, Tyson s\'est précipité à un coup mais a fait une erreur en estimant sa distance vers au moins une pied, montrant l\'étendue de la différence qu\'il a fait l\'âge.\r\n\r\n Le boxeur vétéran a ressenti plus de dégâts au septième tour quand il a reçu un coup de poing de la gauche en frappant son temple, et à ce stade, la plupart des fans avaient l\'air excités d\'entendre la dernière cloche.', 'El fabricante de contenido que se convirtió en un boxeador, Jake Paul, dejó un estigma permanente en el legado del boxeador y el héroe de peso pesado dos veces Mike Tyson, después de lograr una victoria en un partido descrito como desvanecimiento, frente a 70 mil fanáticos en Texas, Quien quedó decepcionado por el resultado, así como frente a millones de personas que vieron el controvertido partido en la conocida red de Netflix.\r\n\r\n Tyson parecía ser una sombra de su antiguo personaje, como se esperaba de un hombre de 58 años y no ha competido a nivel profesional durante 19 años.\r\n\r\n En cuanto a Paul, que tiene 27 años, aunque es un principiante en el boxeo, es muy atleta, y su edad es muy pequeña para Tyson, mantuvo a su oponente a distancia y pagó golpes precisos en una batalla de ocho Rondas durante dos minutos, mientras que Tyson parecía lento.\r\n\r\n Tyson obtuvo la recepción de los héroes antes de la lucha, pero hubo grandes gritos en su actuación cuando la pelea se acercó a su fin, mientras que algunos fanáticos se fueron antes de anunciar los resultados de los árbitros, que se produjeron en el siguiente orden: 8072, 7973 y 7973 .\r\n La percepción tardía de lo que sucedió es sorprendente, pero el resultado no es sorprendente, y alentará a estos críticos que encontraron en el resultado la oportunidad de ridiculizar el boxeo.\r\n\r\n Mientras Tyson dijo que su corazón no estaba en este deporte después de la pérdida, incurrió contra Kevin McBraide en 2005.\r\n\r\n Desde el principio estaba claro que este es un hombre que se acerca a los años sesenta, y todavía tiene cierta fuerza, pero no tiene resistencia.\r\n\r\n El sentimiento general era que para que Tyson ganara, necesitaba sacar a Paul temprano de la pelea, y aunque lo golpeó con su mano derecha la primera vez, Paul comenzó a responder de manera deliberada con golpes, mientras que Tyson bateó su mano izquierda la tercera vez.\r\n\r\n Paul, que llevaba los pantalones cortos más caros del mundo, comenzó la admiración de un hombre de 31 años.\r\n\r\n Tyson, que llevaba un pilar negro sobre su rodilla derecha, estaba moviendo la cabeza rápidamente para hacer que Paul cometiera errores, pero con eso, en la quinta mitad, Tyson corrió a un golpe pero cometió un error al estimar su distancia hacia al menos un pie, mostrando el alcance de la diferencia que hizo en edad.\r\n\r\n El veterano boxeador sintió más daño en la séptima ronda cuando recibió un golpe de la izquierda golpeando su sien, y en este punto, la mayoría de los fanáticos parecían emocionados al escuchar la última campana.', 'Der Content -Hersteller, der sich in einen Boxer, Jake Paul, verwandelte, hinterließ ein dauerhaftes Stigma für das Erbe des Boxers und des Schwergewichts -Helden, zweimal Mike Tyson, nachdem er in einem als verblassenden Spiel einen Sieg erzielt hatte, vor 70.000 Fans in Texas, die von dem Ergebnis enttäuscht waren, sowie vor Millionen, die das umstrittene Match auf dem gut bekannten Netflix -Netzwerk gesehen haben.\r\n\r\n Tyson schien ein Schatten seines alten Charakters zu sein, wie von einem 58 -jährigen Mann erwartet und seit 19 Jahren nicht mehr auf professioneller Ebene angetreten ist.\r\n\r\n Paul, der 27 Jahre alt ist, obwohl er ein Anfänger im Boxen ist, ist er sehr Sportler, und sein Alter ist für Tyson sehr klein, er hat seinen Gegner in der Ferne behalten und er bezahlte in einer Schlacht von acht genauen Schlägen genaue Schläge Runden für zwei Minuten, während Tyson langsam schien.\r\n\r\n Tyson erhielt den Empfang der Helden vor den Kämpfen, aber es gab große Rufe für seine Leistung, als sich der Kampf an das Ende näherte, während einige Fans vor der Ankündigung der Ergebnisse der Schiedsrichter, die in der folgenden Reihenfolge kam, ankündigten: 8072, 7973 und 7973 .\r\n Die späte Wahrnehmung dessen, was passiert ist, ist erstaunlich, aber das Ergebnis ist nicht überraschend, und Sie werden diese Kritiker ermutigen, die im Ergebnis eine Gelegenheit gefunden haben, das Boxen zu verspotten.\r\n\r\n Während Tyson sagte, sein Herz sei nach dem Verlust, den er 2005 gegen Kevin McBraide entsprach, nicht in diesem Sport sei.\r\n\r\n Von Anfang an war klar, dass dies ein Mann ist, der sich den sechziger Jahren nähert und immer noch etwas Kraft hat, aber er hat keine Ausdauer.\r\n\r\n Das allgemeine Gefühl war, dass er Paul früh aus dem Kampf entfernen musste, damit Tyson gewann, und obwohl er ihn zum ersten Mal mit der rechten Hand schlug, begann Paul auf gezielte Weise mit Schlägen zu reagieren, während Tyson seine schlug Linkes Hand beim dritten Mal.\r\n\r\n Paul, der die teuersten Shorts der Welt trug, begann die Bewunderung eines 31 -jährigen Mannes.\r\n\r\n Tyson, der eine schwarze Säule über seinem rechten Knie trug, bewegte sich schnell mit dem Kopf, um Paul zu fehlern, aber damit eilte Tyson in der fünften Halbzeit zu einem Schlag, machte aber einen Fehler, um ihre Entfernung in Richtung mindestens einem zu schätzen Fuß, der das Ausmaß des Unterschieds zeigt, den er machte.\r\n\r\n Der Veteranenboxer spürte in der siebten Runde mehr Schaden, als er einen Schlag von links in den Tempel traf, und zu diesem Zeitpunkt sahen die meisten Fans aufgeregt, die letzte Glocke zu hören.', 'De inhoudsmaker die een bokser, Jake Paul, veranderde, liet een permanent stigma achter op de erfenis van de bokser en de zwaargewicht held tweemaal Mike Tyson, na het behalen van een overwinning in een wedstrijd beschreven als vervaging, voor 70 duizend fans in Texas, die teleurgesteld waren door het resultaat, evenals voor miljoenen degenen die de controversiële wedstrijd hebben bekeken op het goed bekende Netflix -netwerk.\r\n\r\n Tyson leek een schaduw van zijn oude personage te zijn, zoals verwacht van een 58 -jarige man en heeft 19 jaar niet op professioneel niveau deelgenomen.\r\n\r\n Wat Paul betreft, die 27 jaar oud is, hoewel hij een beginner is in het boksen, hij is een zeer atleet, en zijn leeftijd is erg klein voor Tyson, hij hield zijn tegenstander op afstand, en hij betaalde nauwkeurige stoten in een strijd van acht Rondes gedurende twee minuten, terwijl Tyson langzaam leek.\r\n\r\n Tyson verkreeg de receptie van de helden vóór de gevechten, maar er waren geweldige schreeuwen van zijn prestaties toen het gevecht het einde naderde, terwijl sommige fans vertrokken voordat ze de resultaten van de scheidsrechters aankondigden, die in de volgende volgorde kwamen: 8072, 7973 en 7973 .\r\n De late perceptie van wat er is gebeurd, is verbazingwekkend, maar het resultaat is niet verrassend en je zult deze critici aanmoedigen die in het resultaat een kans hebben om boksen belachelijk te maken.\r\n\r\n Terwijl Tyson zei dat zijn hart niet in deze sport was na het verlies dat hij in 2005 tegen Kevin McBraide liep.\r\n\r\n Vanaf het begin was het duidelijk dat dit een man is die de jaren zestig nadert en nog steeds wat kracht heeft, maar hij heeft geen uithoudingsvermogen.\r\n\r\n Het algemene gevoel was dat hij, om Tyson te winnen, Paul vroeg uit het gevecht moest verwijderen, en hoewel hij hem de eerste keer met zijn rechterhand sloeg, begon Paul op een opzettelijke manier te reageren met stoten, terwijl Tyson de zijne sloeg linkerhand de derde keer.\r\n\r\n Paul, die de duurste shorts ter wereld droeg, begon de bewondering van een 31 -jarige man.\r\n\r\n Tyson, die een zwarte pilaar over zijn rechterknie droeg, bewoog zijn hoofd snel om Paul fouten te laten maken, maar daarmee snelde Tyson in de vijfde helft naar een klap, maar maakte een fout bij het schatten van haar afstand naar minstens één voet, die de omvang toont van het verschil dat hij leeftijd maakte.\r\n\r\n De ervaren bokser voelde meer schade in de zevende ronde toen hij een klap kreeg van links die zijn tempel raakte, en op dit moment zagen de meeste fans er opgewonden uit om de laatste bel te horen.', 'tyson.jpg', '2024-11-24 08:52:35');
INSERT INTO `news` (`id`, `title_ar`, `title_en`, `title_fr`, `title_es`, `title_de`, `title_nl`, `content_ar`, `content_en`, `content_fr`, `content_es`, `content_de`, `content_nl`, `image_url`, `published_at`) VALUES
(41, 'ميسي يتحدث عن أداء برشلونة.. وفليك يردّ عليه', 'Messi talks about Barcelona\'s performance ... and a cake responds to it', 'Messi parle de la performance de Barcelone ... et un gâteau y répond', 'Messi habla sobre la actuación de Barcelona ... y un pastel responde', 'Messi spricht über Barcelonas Leistung ... und ein Kuchen reagiert darauf', 'Messi vertelt over de prestaties van Barcelona ... en een cake reageert erop', 'أكد النجم الأرجنتيني ليونيل ميسي، أفضل لاعب في تاريخ نادي برشلونة الإسباني، أنه لاحظ التطور الكبير الذي قدمه المدرب الألماني الحالي للفريق هانزي فليك.\r\n\r\nميسي يشيد بدور فليك في تطوير اللاعبين الشباب في برشلونة\r\n\r\nوأشاد ميسي بإصرار فليك على منح اللاعبين الشباب في برشلونة فرصة اللعب، وقد ظهرت مزايا ذلك من خلال طريقة اللعب الرائعة التي يقدمها برشلونة، والذي بدوره يظهر بأفضل شكل له منذ خروج ميسي من النادي منذ ثلاثة أعوام.\r\n\r\n\r\n\r\n\r\nوقال ميسي في تصريحات لقناة كتالونياتي في 3: الطريقة التي يؤدي بها الفريق الآن تجعلني فخورا.. برشلونة مذهل.\r\n\r\nوكان ميسي إلى جانب زملاء آخرين ضمن جيل عظيم في برشلونة مثل أندريا إنيستا وتشافي هيرنانديز، وهم من اللاعبين الذين تخرجوا من الأكاديمية الشهيرة للنادي، فيما يقود حاليا لامين يامال مجموعة جديدة من لاعبي أكاديمية لاماسيا.\r\n\r\nوأضاف ميسي: هذا حدث حينما وصلت إلى النادي في سن 13 عاما، أعتقد أنه من الرائع أن يحظى هؤلاء اللاعبون الشباب بفرصة في الأعوام الماضية، حينما تمنحهم الفرصة وتعطيهم الثقة، سيردون بتلك الطريقة لأنهم يعلمون أن النادي أهم من أي شخص ويفهمون الطريقة التي يرغب النادي في اللعب بها، هناك أمور جيدة تحدث حاليا مثلما حدثت مع الجيل السابق.\r\nوكان تشافي، المدرب السابق لبرشلونة قبل وصول فليك والذي تمت إقالته الموسم الماضي، أول من منح الفرصة لبناء فريق من الموهوبين، حينما منح لامين يامال الفرصة وهو في عمر 15 عاما فقط، كما فتح تشافي الباب للمدافع باو كوبارسي ولاعب الوسط فيرمين لوبيز للانضمام إلى الفريق الأول.\r\n\r\nوواصل فليك العمل بنفس الطريقة وذلك رغم أنه وافد جديد على النادي.\r\n\r\nوقال فليك عن تصريحات ميسي: إنه لشرف كبير أن يتحدث أفضل لاعب في برشلونة وفي التاريخ بتلك الطريقة وأن يتابع الفريق وطريقة تطور اللاعبين الشباب، ترى أن قلبه مع الفريق وهذا يعني لنا الكثير كفريق.\r\n\r\nويحل برشلونة ضيفا على سيلتا فيغو غدا السبت وهو يتصدر ترتيب الدوري الإسباني بفارق ست نقاط عن ريال مدريد.\r\nوبذلك تنضم برشلونة التي اتخذت بالفعل إجراءات لوقف انتشار شقق العطلات، إلى قائمة المدن الإسبانية التي تشهد احتجاجات للمطالبة بخفض تكاليف السكن.\r\n\r\n\r\nوبدعم من أحزاب ونقابات يسارية، تجمع المتظاهرون في وسط برشلونة خلف لافتة عملاقة كتب عليها خفّضوا الإيجارات.\r\n\r\n\r\n\r\n\r\n\r\n\r\nقالت كارمي أركارازو، المتحدثة باسم اتحاد المستأجرين الكتالونيين، المنظم الرئيسي للتحرك، لصحافيين اليوم تبدأ دورة سياسية جديدة فيما يتعلق بالإسكان.\r\n\r\nوأضافت لا ينبغي السماح للمستثمرين بالقدوم إلى مدننا واللعب بالشقق كما لو كانوا يلعبون لعبة مونوبولي.\r\n\r\nوبحسب أركارازو فإن النقابة ستستهدف المستغلين الذين يأخذون نصف رواتبنا.\r\nوطالب المتظاهرون بخفض الإيجارات بنسبة 50 في المئة، وعقود إيجار غير محددة المدة، وحظر المبيعات المضاربة للمباني.\r\n\r\nوهددوا ببدء إضراب عن سداد الإيجار.\r\n\r\nوفي مواجهة الضغوط بسبب أزمة الإسكان، أقرت الحكومة في عام 2023 تشريعا يدعو إلى زيادة مشاريع الإسكان، وفرض قيود أكبر على الإيجارات في المناطق ذات الطلب المرتفع وفرض عقوبات على الملّاك الذين لا يشغلون العقارات.\r\n\r\nلكن الإيجارات استمرت في الارتفاع بينما كانت الحكومة تضغط على السلطات المحلية والإقليمية لتطبيق بعض بنود التشريع.\r\n\r\nوبعد التقدم بهدفين عن طريق البرازيلي رافينيا والبولندي روبرت ليفاندوفسكي، تغير كل شيء لبرشلونة بطرد لاعب الوسط مارك كاسادو في الدقيقة 82.\r\n\r\nوخلال 3 دقائق، سجل سيلتا فيغو هدفين، عن طريق ألفون غونزاليس 84 وهيوغو ألفاريز 86، لتنتهي المباراة بالتعادل 22.\r\n\r\nووسع برشلونة الفارق عن ريال مدريد بسبعة نقاط، لكن الملكي قد يكون على بعد نقطة من برشلونة في حال الفوز بلقائه المؤجل، ومباراته المقبلة الأحد أمام ليغانيس.\r\nوذكرت عدة وسائل إعلام، بينها موندو ديبورتيفو، أن متصدر الدوري الإسباني بعث رسالة إلكترونية لأعضاء النادي حاملين التذاكر الموسمية لتوضيح هذا التأخير.\r\n\r\nويستخدم برشلونة الملعب الأولمبي منذ عام ونصف.\r\n\r\nومن الممكن أن تكون المباراة أمام رايو فاييكانو، منتصف فبراير المقبل هي أولى المباريات التي تقام على الملعب المجدد، ولكن لم يؤكد برشلونة هذا الأمر في رسالته الإلكترونية.\r\n\r\nوبعد عدة تأجيلات، كان الميعاد الرسمي الأخير للعودة لكاب نو نهاية شهر يناير أو مطلع فبراير.\r\n\r\nووفقا لتقارير إعلامية، برر النادي التأجيل الجديد بـقواعد يويفا، التي تمنع تغيير الملعب خلال مرحلة الدوري بدوري أبطال أوروبا.\r\nوتستمر مرحلة الدوري بدوري أبطال أوروبا حتى آخر يناير.\r\n\r\nوبسبب التحديات اللوجيستية والتكاليف الإضافية في تشغيل ملعبين كبيرين في نفس التوقيت، قرر النادي عدم تنفيذ عملية نقل جزئية. ومع ذلك، لن يكون الملعب قد اكتمل بشكل كامل عندما يقوم النادي بتشغيله.\r\n\r\nوكانت آخر مباراة خاضها فريق برشلونة على ملعب كامب نو كانت في الجولة قبل الأخيرة من موسم 2022  2023 عندما فاز على مايوركا 3 0.\r\n\r\nويعد كامب نو أحد الملاعب التاريخية في العالم. وكانت التجديدات ضخمة حيث تم هدم الملعب القديم بالكامل. وسيتم زيادة سعة المدرجات قليلا لكي تصل تقريبا إلى 105 آلاف، وسيظل الأكبر في أوروبا.', 'Argentine star Lionel Messi, the best player in the history of Barcelona, ​​confirmed that he had noticed the great development presented by the current German coach to the team Hanzi Felk.\r\n\r\n Messi praises Felk in developing young players in Barcelona\r\n\r\n Messi praised Felk\'s insistence on giving young players in Barcelona the opportunity to play, and the advantages of this appeared through the wonderful way of playing Barcelona, ​​which in turn appears in his best form since Messi left the club three years ago.\r\n\r\n\r\n\r\n\r\n Messi said in comments to Cataloniani in 3: The way the team is now making me proud ... Barcelona is amazing.\r\n\r\n Messi was alongside other colleagues in a great generation in Barcelona, ​​such as Andrea Iniesta and Xavi Hernandez, and they are among the players who graduated from the famous academy of the club, while he is currently leading a new group of Lamasia\'s academy players.\r\n\r\n Messi added: This happened when I arrived at the club at the age of 13, I think it is great for these young players to have an opportunity in the past years, when they give them the opportunity and give them confidence, they will respond in this way because they know that the club is more important than anyone and understand the way the club wants In playing with it, there are good things that are currently happening as it happened with the previous generation.\r\n Xavi, the former coach of Barcelona before the arrival of Felk, who was sacked last season, was the first to give the opportunity to build a talented team, when he gave Lamal the opportunity at the age the first.\r\n\r\n Felk continued work in the same way, although he is a new expatriate on the club.\r\n\r\n Felk said about Messi\'s statements: It is a great honor to speak the best player in Barcelona and in history in this way and to follow the team and the way the young players develop, you see that his heart with the team and this means a lot to us as a team.\r\n\r\n Barcelona will visit Celta Vigo tomorrow, Saturday, leading the Spanish league standings six points from Real Madrid.\r\n Thus, Barcelona, ​​who has already taken measures to stop the spread of holiday apartments, joins the list of Spanish cities that are witnessing protests to demand a reduction in housing costs.\r\n\r\n\r\n With the support of left -wing parties and unions, the demonstrators in central Barcelona gathered behind a giant banner on which they were reduced.\r\n\r\n\r\n\r\n\r\n\r\n\r\n Carmi Arakrazo, a spokeswoman for the Catalan tenant, the main organizer of the move, told reporters today to start a new political session with regard to housing.\r\n\r\n She added that investors should not be allowed to come to our cities and play with apartments as if they were playing Monoboli.\r\n\r\n According to Aricazo, the union will target exploiters who take half of our salaries.\r\n The demonstrators demanded that the rents be reduced by 50 percent, unlimited lease contracts, and the prohibition of speculative sales of buildings.\r\n\r\n They threatened to start a strike on payment.\r\n\r\n In the face of pressure due to the housing crisis, in 2023 the government approved legislation calling for an increase in housing projects, greater restrictions on rents in high demand areas and imposing sanctions on owners who do not occupy real estate.\r\n\r\n However, the rents continued to rise while the government was pressuring the local and regional authorities to implement some of the items.\r\n\r\n After progressing with two goals by Brazilian Ravenia and Polish Robert Lewandowski, everything for Barcelona changed the expulsion of midfielder Mark Cassado in the 82nd minute.\r\n\r\n Within 3 minutes, Celta Vigo scored two goals, by Alfon Gonzalez 84 and Hugo Alvarez 86, ending the match with a tie 22.\r\n\r\n Barcelona expanded the difference from Real Madrid by seven points, but the royal may be a point from Barcelona in the event of winning his postponed meeting, and his upcoming match on Sunday against Leganes.\r\n Several media, including Mundo Deportivo, reported that the Spanish league leaders sent an email to the club members carrying seasonal tickets to clarify this delay.\r\n\r\n Barcelona has been using the Olympic stadium for a year and a half.\r\n\r\n It is possible that the match will be against Rayo Valicano, in mid -February, the first matches to be held on the renewed stadium, but Barcelona did not confirm this in its electronic message.\r\n\r\n After several delay, the last official date was to return to Cap Nou at the end of January or in early February.\r\n\r\n According to media reports, the club justified the new postponement by UEFA, which prevents the stadium from changing during the Champions League league.\r\n The Champions League league stage will continue until the end of January.\r\n\r\n Because of the logistical challenges and additional costs in operating two large stadiums at the same time, the club decided not to carry out a partial transfer. However, the stadium will not be completely completed when the club runs it.\r\n\r\n The last match of the Barcelona team at the Camp Nou was in the penultimate round of the 2022 season 2023, when it beat Mallorca 3 0.\r\n\r\n Camp Nou is one of the historical stadiums in the world. The renovations were huge as the old stadium was completely demolished. The stands will be increased slightly to approximately 105,000, and will remain the largest in Europe.', 'La star argentine Lionel Messi, le meilleur joueur de l\'histoire de Barcelone, a confirmé qu\'il avait remarqué le grand développement présenté par l\'entraîneur allemand actuel à l\'équipe Hanzi Felk.\r\n\r\n Messi fait l\'éloge de Felk dans le développement de jeunes joueurs à Barcelone\r\n\r\n Messi a salué l\'insistance de Felk à donner aux jeunes joueurs à Barcelone la possibilité de jouer, et les avantages de cela sont apparus à travers la merveilleuse façon de jouer à Barcelone, qui à son tour apparaît sous sa meilleure forme depuis que Messi a quitté le club il y a trois ans.\r\n\r\n\r\n\r\n\r\n Messi a dit dans des commentaires à Cataloniani en 3: la façon dont l\'équipe me rend maintenant fier ... Barcelone est incroyable.\r\n\r\n Messi était aux côtés d\'autres collègues d\'une grande génération à Barcelone, comme Andrea Iniesta et Xavi Hernandez, et ils font partie des joueurs qui ont obtenu leur diplôme de la célèbre académie du club, alors qu\'il dirige actuellement un nouveau groupe de joueurs de l\'Académie de Lamasia .\r\n\r\n Messi a ajouté: cela s\'est produit lorsque je suis arrivé au club à l\'âge de 13 ans, je pense que c\'est formidable pour ces jeunes joueurs d\'avoir une opportunité au cours des dernières années, quand ils leur donnent l\'occasion et leur donnent confiance, ils répondront en De cette façon parce qu\'ils savent que le club est plus important que quiconque et comprend la façon dont le club veut jouer avec, il y a de bonnes choses qui se produisent actuellement comme cela s\'est produit avec la génération précédente.\r\n Xavi, l\'ancien entraîneur de Barcelone avant l\'arrivée de Felk, qui a été limogé la saison dernière, a été le premier à donner l\'occasion de constituer une équipe talentueuse, quand il a donné à Lamal l\'occasion à l\'âge la première.\r\n\r\n Felk a continué à travailler de la même manière, bien qu\'il soit un nouvel expatrié dans le club.\r\n\r\n Felk a dit à propos des déclarations de Messi: c\'est un grand honneur de parler le meilleur joueur de Barcelone et de l\'histoire de cette manière et de suivre l\'équipe et la façon dont les jeunes joueurs développent, vous voyez que son cœur avec l\'équipe et cela signifie beaucoup à nous en équipe.\r\n\r\n Barcelone visitera CELTA Vigo demain, samedi, menant le classement de la ligue espagnole à six points du Real Madrid.\r\n Ainsi, Barcelone, qui a déjà pris des mesures pour arrêter la propagation des appartements de vacances, rejoint la liste des villes espagnoles qui assistent à des manifestations pour exiger une réduction des frais de logement.\r\n\r\n\r\n Avec le soutien des fêtes et des syndicats de gauche, les manifestants du centre de Barcelone se sont rassemblés derrière une bannière géante sur laquelle ils ont été réduits.\r\n\r\n\r\n\r\n\r\n\r\n\r\n Carmi Arakrazo, porte-parole du locataire catalan, l\'organisateur principal de la décision, a déclaré aux journalistes aujourd\'hui de commencer une nouvelle session politique concernant le logement.\r\n\r\n Elle a ajouté que les investisseurs ne devraient pas être autorisés à venir dans nos villes et à jouer avec des appartements comme s\'ils jouaient Monoboli.\r\n\r\n Selon Aricazo, le syndicat ciblera les exploiteurs qui prennent la moitié de nos salaires.\r\n Les manifestants ont exigé que les loyers soient réduits de 50%, des contrats de location illimités et l\'interdiction des ventes spéculatives de bâtiments.\r\n\r\n Ils ont menacé de commencer une grève sur le paiement.\r\n\r\n Face à la pression due à la crise du logement, en 2023, le gouvernement a approuvé la législation appelant à une augmentation des projets de logement, à des restrictions plus importantes sur les loyers dans les zones à forte demande et à imposer des sanctions aux propriétaires qui n\'occupent pas les biens immobiliers.\r\n\r\n Cependant, les loyers ont continué d\'augmenter pendant que le gouvernement faisait pression sur les autorités locales et régionales pour mettre en œuvre certains éléments.\r\n\r\n Après avoir progressé avec deux buts de Ravenia brésilien et de Robert Lewandowski, tout pour Barcelone a changé l\'expulsion du milieu de terrain Mark Cassado à la 82e minute.\r\n\r\n En 3 minutes, Celta Vigo a marqué deux buts, par Alfon Gonzalez 84 et Hugo Alvarez 86, mettant fin au match avec une égalité 22.\r\n\r\n Barcelone a élargi la différence avec le Real Madrid par sept points, mais le Royal peut être un point de Barcelone en cas de victoire de sa réunion reportée et de son prochain match dimanche contre Leganes.\r\n Plusieurs médias, dont Mundo Deportivo, ont rapporté que les dirigeants de la ligue espagnole avaient envoyé un e-mail aux membres du club portant des billets saisonniers pour clarifier ce retard.\r\n\r\n Barcelone utilise le stade olympique depuis un an et demi.\r\n\r\n Il est possible que le match soit contre Rayo Valicano, à la mi-février, les premiers matchs à tenir dans le stade renouvelé, mais Barcelone n\'a pas confirmé cela dans son message électronique.\r\n\r\n Après plusieurs retards, la dernière date officielle était de retourner à Cap Nou fin janvier ou début février.\r\n\r\n Selon les médias, le club a justifié le nouveau report par l\'UEFA, ce qui empêche le stade de changer pendant la Ligue de la Ligue des champions.\r\n La scène de la Ligue des champions se poursuivra jusqu\'à fin janvier.\r\n\r\n En raison des défis logistiques et des coûts supplémentaires dans l\'exploitation de deux grands stades en même temps, le club a décidé de ne pas effectuer de transfert partiel. Cependant, le stade ne sera pas complètement terminé lorsque le club l\'exécutera.\r\n\r\n Le dernier match de l\'équipe de Barcelone au Camp Nou était dans l\'arrivée de la saison 2022 2023, lorsqu\'il a battu Mallorca 3 0.\r\n\r\n Camp Nou est l\'un des stades historiques du monde. Les rénovations étaient énormes car l\'ancien stade a été complètement démoli. Les stands seront légèrement augmentés à environ 105 000 et resteront les plus importants en Europe.', 'La estrella argentina Lionel Messi, la mejor jugadora de la historia de Barcelona, ​​confirmó que había notado el gran desarrollo presentado por el actual entrenador alemán del equipo Hanzi Felk.\r\n\r\n Messi elogia a Felk en el desarrollo de jugadores jóvenes en Barcelona\r\n\r\n Messi elogió la insistencia de Felk en dar a los jugadores jóvenes en Barcelona la oportunidad de jugar, y las ventajas de esto aparecieron a través de la maravillosa forma de interpretar a Barcelona, ​​que a su vez aparece en su mejor forma desde que Messi dejó el club hace tres años.\r\n\r\n\r\n\r\n\r\n Messi dijo en comentarios a Cataloniani en 3: La forma en que el equipo ahora me está enorgulleciendo ... Barcelona es increíble.\r\n\r\n Messi estaba junto a otros colegas en una gran generación en Barcelona, ​​como Andrea Iniesta y Xavi Hernández, y están entre los jugadores que se graduaron de la famosa Academia del Club, mientras que actualmente lidera un nuevo grupo de jugadores de la Academia de Lamasia .\r\n\r\n Messi agregó: Esto sucedió cuando llegué al club a la edad de 13 años, creo que es genial que estos jugadores jóvenes tengan una oportunidad en los últimos años, cuando les dan la oportunidad y les dan confianza, responderán en De esta manera, debido a que saben que el club es más importante que nadie y comprende la forma en que el club quiere jugar con él, hay cosas buenas que están sucediendo actualmente como sucedió con la generación anterior.\r\n Xavi, el ex entrenador de Barcelona antes de la llegada de Felk, quien fue despedido la temporada pasada, fue el primero en dar la oportunidad de construir un equipo talentoso, cuando le dio a Lamal la oportunidad a la edad.\r\n\r\n Felk continuó el trabajo de la misma manera, aunque es un nuevo expatriado en el club.\r\n\r\n Felk dijo sobre las declaraciones de Messi: es un gran honor hablar el mejor jugador de Barcelona y en la historia de esta manera y seguir al equipo y la forma en que se desarrollan los jugadores jóvenes, ves que su corazón con el equipo y esto significa mucho para nosotros como equipo.\r\n\r\n Barcelona visitará Celta Vigo mañana, sábado, liderando la clasificación de la Liga Española a seis puntos del Real Madrid.\r\n Por lo tanto, Barcelona, ​​que ya ha tomado medidas para detener la propagación de apartamentos de vacaciones, se une a la lista de ciudades españolas que presencian protestas para exigir una reducción en los costos de la vivienda.\r\n\r\n\r\n Con el apoyo de los partidos y los sindicatos de izquierda, los manifestantes en el centro de Barcelona se reunieron detrás de una pancarta gigante en la que se redujeron.\r\n\r\n\r\n\r\n\r\n\r\n\r\n Carmi Arakrazo, una portavoz del inquilino catalán, el principal organizador de la mudanza, dijo a los periodistas hoy que comenzaran una nueva sesión política con respecto a la vivienda.\r\n\r\n Agregó que a los inversores no se les debe permitir venir a nuestras ciudades y jugar con apartamentos como si estuvieran jugando monoboli.\r\n\r\n Según Aricazo, el sindicato se dirigirá a los explotadores que toman la mitad de nuestros salarios.\r\n Los manifestantes exigieron que los alquileres se redujeran en un 50 por ciento, contratos de arrendamiento ilimitados y la prohibición de las ventas especulativas de edificios.\r\n\r\n Amenazaron con comenzar una huelga de pago.\r\n\r\n Ante la presión debido a la crisis de la vivienda, en 2023 el gobierno aprobó una legislación que pidió un aumento en los proyectos de vivienda, mayores restricciones a las rentas en áreas de alta demanda e imponer sanciones a los propietarios que no ocupan bienes raíces.\r\n\r\n Sin embargo, los alquileres continuaron aumentando mientras el gobierno presionaba a las autoridades locales y regionales para que implementen algunos de los artículos.\r\n\r\n Después de progresar con dos goles del brasileño Ravenia y el polaco Robert Lewandowski, todo para Barcelona cambió la expulsión del mediocampista Mark Cassado en el minuto 82.\r\n\r\n En 3 minutos, Celta Vigo anotó dos goles, por Alfon González 84 y Hugo Álvarez 86, terminando el partido con un empate 22.\r\n\r\n Barcelona amplió la diferencia del Real Madrid por siete puntos, pero el Royal puede ser un punto de Barcelona en el caso de ganar su reunión pospuesta, y su próximo partido el domingo contra Leganes.\r\n Varios medios de comunicación, incluido Mundo Deportivo, informaron que los líderes de la liga española enviaron un correo electrónico a los miembros del club que llevaban boletos de temporada para aclarar este retraso.\r\n\r\n Barcelona ha estado usando el estadio olímpico durante un año y medio.\r\n\r\n Es posible que el partido sea contra Rayo Valicano, a mediados de febrero, los primeros partidos que se celebrarán en el estadio renovado, pero Barcelona no confirmó esto en su mensaje electrónico.\r\n\r\n Después de varios retrasos, la última fecha oficial fue regresar a Cap Nou a fines de enero o a principios de febrero.\r\n\r\n Según los informes de los medios, el club justificó el nuevo aplazamiento de la UEFA, que evita que el estadio cambie durante la Liga de la Campeones.\r\n La etapa de la Liga de la Liga de Campeones continuará hasta finales de enero.\r\n\r\n Debido a los desafíos logísticos y los costos adicionales en la operación de dos estadios grandes al mismo tiempo, el club decidió no realizar una transferencia parcial. Sin embargo, el estadio no se completará por completo cuando el club lo ejecute.\r\n\r\n El último partido del equipo de Barcelona en el Camp Nou fue en la penúltima ronda de la temporada 2023 2022, cuando venció a Mallorca 3 0.\r\n\r\n Camp Nou es uno de los estadios históricos del mundo. Las renovaciones fueron enormes ya que el antiguo estadio fue completamente demolido. Los stands se incrementarán ligeramente a aproximadamente 105,000, y seguirán siendo el más grande de Europa.', 'Der argentinische Star Lionel Messi, der beste Spieler in der Geschichte von Barcelona, ​​bestätigte, dass er die große Entwicklung des aktuellen deutschen Trainers des Teams Hanzi Felk bemerkt hatte.\r\n\r\n Messi lobt Felk bei der Entwicklung junger Spieler in Barcelona\r\n\r\n Messi lobte Felks Beharren darauf, jungen Spielern in Barcelona die Gelegenheit zum Spielen zu geben, und die Vorteile davon erscheinten durch die wundervolle Art, Barcelona zu spielen, was wiederum in seiner besten Form seit Messi vor drei Jahren aus dem Club verlassen wird.\r\n\r\n\r\n\r\n\r\n Messi sagte in Kommentaren zu Kataloniani in 3: Die Art und Weise, wie das Team jetzt stolz macht ... Barcelona ist unglaublich.\r\n\r\n Messi war neben anderen Kollegen in einer großartigen Generation in Barcelona wie Andrea Iniesta und Xavi Hernandez und gehören zu den Spielern, die die berühmte Akademie des Vereins abgeschlossen haben, während er derzeit eine neue Gruppe von Lamasias Academy -Spielern leitet .\r\n\r\n Messi fügte hinzu: Dies geschah, als ich im Alter von 13 Jahren im Club ankam. Ich denke Auf diese Weise, weil sie wissen, dass der Club wichtiger ist als jeder andere und verstehen, wie der Verein beim Spielen damit will, gibt es gute Dinge, die derzeit geschehen, wie es mit der vorherigen Generation passiert ist.\r\n Xavi, der ehemalige Trainer von Barcelona, ​​vor der Ankunft von Felk, der in der vergangenen Saison entlassen wurde, war der erste, der die Möglichkeit gab, ein talentiertes Team aufzubauen, als er Lamal die Gelegenheit im Alter gab.\r\n\r\n Felk setzte die Arbeit auf die gleiche Weise fort, obwohl er ein neuer Expatriate im Club ist.\r\n\r\n Felk sagte über Messis Aussagen: Es ist eine große Ehre, den besten Spieler in Barcelona und in der Geschichte auf diese Weise zu sprechen und dem Team und der Art und Weise zu folgen, wie sich die jungen Spieler entwickeln, sehen Sie, dass sein Herz mit dem Team und dies viel bedeutet für uns als Team.\r\n\r\n Barcelona wird morgen am Samstag Celta Vigo besuchen und die spanischen Liga sechs Punkte von Real Madrid anführen.\r\n So schließt sich Barcelona, ​​der bereits Maßnahmen ergriffen hat, um die Verbreitung von Ferienwohnungen zu stoppen, in die Liste der spanischen Städte, die Proteste verzeichnen, um eine Reduzierung der Wohnkosten zu erfordern.\r\n\r\n\r\n Mit der Unterstützung der linken Parteien und Gewerkschaften versammelten sich die Demonstranten in Zentral -Barcelona hinter einem riesigen Banner, auf dem sie reduziert wurden.\r\n\r\n\r\n\r\n\r\n\r\n\r\n Carmi Arakrazo, eine Sprecherin des katalanischen Mieters, der Hauptorganisator des Umzugs, sagte heute Reportern, eine neue politische Sitzung in Bezug auf Wohnraum zu beginnen.\r\n\r\n Sie fügte hinzu, dass Anleger nicht in unsere Städte kommen und mit Wohnungen spielen dürfen, als würden sie Monoboli spielen.\r\n\r\n Laut Aricazo wird die Gewerkschaft Ausbeuter ansprechen, die die Hälfte unserer Gehälter nehmen.\r\n Die Demonstranten forderten, dass die Mieten um 50 Prozent, unbegrenzte Mietverträge und das Verbot des spekulativen Umsatzes von Gebäuden reduziert werden.\r\n\r\n Sie drohten, einen Zahlungsstreik zu beginnen.\r\n\r\n Angesichts des Drucks aufgrund der Immobilienkrise genehmigte die Regierung im Jahr 2023 die Gesetzgebung, in der eine Erhöhung der Wohnungsbauprojekte, eine höhere Beschränkung der Mieten in Bereichen hohe Nachfrage und Sanktionen gegen Eigentümer auferlegt wurde, die keine Immobilien besetzen.\r\n\r\n Die Mieten stiegen jedoch weiter an, während die Regierung die lokalen und regionalen Behörden unter Druck setzte, einige der Punkte umzusetzen.\r\n\r\n Nach zwei Toren des brasilianischen Raveniens und des polnischen Robert Lewandowski -Treffers veränderte alles für Barcelona die Vertreibung des Mittelfeldspielers Mark Cassado in der 82. Minute.\r\n\r\n Innerhalb von 3 Minuten erzielte Celta Vigo zwei Tore von Alfon Gonzalez 84 und Hugo Alvarez 86 und beendete das Spiel mit einem Unentschieden 22.\r\n\r\n Barcelona erweiterte den Unterschied von Real Madrid um sieben Punkte, aber der König kann ein Punkt von Barcelona sein, wenn er sein verschobenes Treffen und sein bevorstehendes Spiel am Sonntag gegen Leganes gewann.\r\n Mehrere Medien, darunter Mundo Deportivo, berichteten, dass die spanischen Ligaführer eine E -Mail an die Clubmitglieder mit saisonalen Tickets gesendet haben, um diese Verzögerung zu klären.\r\n\r\n Barcelona nutzt seit anderthalb Jahren das Olympia -Stadion.\r\n\r\n Es ist möglich, dass das Spiel Mitte Februar gegen Rayo Valicano sein wird, die ersten Spiele, die im erneuerten Stadion stattfinden, aber Barcelona bestätigte dies nicht in seiner elektronischen Botschaft.\r\n\r\n Nach mehreren Verzögerungen bestand das letzte offizielle Datum darin, Ende Januar oder Anfang Februar nach Cap Nou zurückzukehren.\r\n\r\n Laut Medienberichten begründete der Verein die neue Verschiebung durch UEFA, die verhindert, dass sich das Stadion während der Champions League -League verändert.\r\n Die Champions League -Bühne wird bis Ende Januar fortgesetzt.\r\n\r\n Aufgrund der logistischen Herausforderungen und zusätzlichen Kosten für gleichzeitig zwei große Stadien entschied der Club, keine teilweise Übertragung durchzuführen. Das Stadion wird jedoch nicht vollständig abgeschlossen sein, wenn der Club es ausführt.\r\n\r\n Das letzte Spiel des Barcelona -Teams im Camp Nou befand sich in der vorletzten Runde der Saison 2023 2023, als es Mallorca 3 0 besiegte.\r\n\r\n Camp Nou ist eines der historischen Stadien der Welt. Die Renovierungsarbeiten waren riesig, als das alte Stadion vollständig abgerissen wurde. Die Stände werden leicht auf ca. 105.000 erhöht und bleiben die größten in Europa.', 'Argentijnse ster Lionel Messi, de beste speler in de geschiedenis van Barcelona, ​​bevestigde dat hij de geweldige ontwikkeling had opgemerkt die door de huidige Duitse coach van het team Hanzi Felk is gepresenteerd.\r\n\r\n Messi prijst Felk in het ontwikkelen van jonge spelers in Barcelona\r\n\r\n Messi prees Felk\'s aandringen op het geven van jonge spelers in Barcelona de kans om te spelen, en de voordelen hiervan verschenen door de prachtige manier om Barcelona te spelen, die op zijn beurt in zijn beste vorm verschijnt sinds Messi de club drie jaar geleden verliet.\r\n\r\n\r\n\r\n\r\n Messi zei in opmerkingen aan Cataloniani in 3: De manier waarop het team me nu trots maakt ... Barcelona is geweldig.\r\n\r\n Messi was naast andere collega\'s in een grote generatie in Barcelona, ​​zoals Andrea Iniesta en Xavi Hernandez, en ze behoren tot de spelers die zijn afgestudeerd aan de beroemde Academie van de club, terwijl hij momenteel een nieuwe groep Lamasia\'s Academy Players leidt .\r\n\r\n Messi voegde eraan toe: dit gebeurde toen ik op 13 -jarige leeftijd bij de club aankwam, ik vind het geweldig voor deze jonge spelers om de kans te krijgen in de afgelopen jaren, wanneer ze hen de kans geven en ze vertrouwen geven, zullen ze reageren Op deze manier omdat ze weten dat de club belangrijker is dan wie dan ook en begrijpen hoe de club ermee wil spelen, zijn er goede dingen die momenteel gebeuren zoals het is gebeurd met de vorige generatie.\r\n Xavi, de voormalige coach van Barcelona vóór de komst van Felk, die vorig seizoen werd ontslagen, was de eerste die de gelegenheid gaf om een ​​getalenteerd team te bouwen, toen hij Lamal de kans gaf op de eerste leeftijd de eerste.\r\n\r\n Felking ging op dezelfde manier verder, hoewel hij een nieuwe expat in de club is.\r\n\r\n Felk zei over de verklaringen van Messi: het is een grote eer om de beste speler in Barcelona en in de geschiedenis op deze manier te spreken en het team te volgen en de manier waarop de jonge spelers zich ontwikkelen, zie je dat zijn hart met het team en dit betekent veel voor ons als team.\r\n\r\n Barcelona zal morgen, zaterdag, Celta Vigo bezoeken en de Spaanse League -klassement zes punten van Real Madrid leidt.\r\n Barcelona, ​​die al maatregelen heeft genomen om de verspreiding van vakantie -appartementen te stoppen, sluit zich aan bij de lijst van Spaanse steden die getuige zijn van protesten om een ​​verlaging van de huisvestingskosten te eisen.\r\n\r\n\r\n Met de steun van links -Wing -partijen en vakbonden verzamelden de demonstranten in centraal Barcelona zich achter een gigantische banner waarop ze werden verminderd.\r\n\r\n\r\n\r\n\r\n\r\n\r\n Carmi Arakrazo, een woordvoerster van de Catalaanse huurder, de belangrijkste organisator van de verhuizing, vertelde verslaggevers vandaag om een ​​nieuwe politieke sessie te beginnen met betrekking tot huisvesting.\r\n\r\n Ze voegde eraan toe dat beleggers niet naar onze steden mogen komen en met appartementen moeten spelen alsof ze Monoboli spelen.\r\n\r\n Volgens Aricazo zal de Unie zich richten op uitbuiters die de helft van onze salarissen nemen.\r\n De demonstranten eisten dat de huurprijzen werden verlaagd met 50 procent, onbeperkte leasecontracten en het verbod op speculatieve verkoop van gebouwen.\r\n\r\n Ze dreigden een staking te beginnen tegen betaling.\r\n\r\n In het licht van de druk als gevolg van de woningcrisis keurde de regering in 2023 de wetgeving goed die opriep tot een toename van woningbouwprojecten, grotere beperkingen op huurprijzen in grote vraaggebieden en het opleggen van sancties aan eigenaren die geen onroerend goed bezetten.\r\n\r\n De huurprijzen bleven echter stijgen terwijl de regering de lokale en regionale autoriteiten onder druk zette om sommige items uit te voeren.\r\n\r\n Na vorderingen met twee doelpunten van Braziliaanse Ravenia en Pools Robert Lewandowski, veranderde alles voor Barcelona de uitwijzing van middenvelder Mark Cassado in de 82e minuut.\r\n\r\n Binnen 3 minuten scoorde Celta Vigo twee doelpunten, door Alfon Gonzalez 84 en Hugo Alvarez 86, waarmee de wedstrijd werd beëindigd met een gelijkspel 22.\r\n\r\n Barcelona breidde het verschil uit Real Madrid met zeven punten uit, maar de koninklijke is misschien een punt uit Barcelona in het geval van het winnen van zijn uitgestelde vergadering en zijn aanstaande wedstrijd op zondag tegen Leganes.\r\n Verschillende media, waaronder Mundo Deportivo, meldden dat de Spaanse competitieleiders een e -mail stuurden naar de clubleden die seizoenskaartjes droegen om deze vertraging te verduidelijken.\r\n\r\n Barcelona gebruikt het Olympisch Stadion al anderhalf jaar.\r\n\r\n Het is mogelijk dat de wedstrijd tegen Rayo Valicano zal zijn, half februari, de eerste wedstrijden die in het hernieuwde stadion worden gehouden, maar Barcelona bevestigde dit niet in zijn elektronische boodschap.\r\n\r\n Na verschillende vertraging keerde de laatste officiële datum terug naar Cap Nou eind januari of begin februari.\r\n\r\n Volgens berichten in de media rechtvaardigde de club het nieuwe uitstel van UEFA, dat voorkomt dat het stadion verandert tijdens de Champions League -competitie.\r\n De Champions League League -fase zal doorgaan tot eind januari.\r\n\r\n Vanwege de logistieke uitdagingen en extra kosten bij het exploiteren van twee grote stadions tegelijkertijd, besloot de club geen gedeeltelijke overdracht uit te voeren. Het stadion zal echter niet volledig worden voltooid wanneer de club het uitvoert.\r\n\r\n De laatste wedstrijd van het Barcelona -team in de Camp Nou was in de voorlaatste ronde van het seizoen 2023 2022, toen het Mallorca 3 0 versloeg.\r\n\r\n Camp Nou is een van de historische stadions ter wereld. De renovaties waren enorm omdat het oude stadion volledig werd gesloopt. De stands zullen enigszins worden verhoogd tot ongeveer 105.000 en zullen de grootste in Europa blijven.', 'messi.jpg', '2024-11-24 09:03:47');

-- --------------------------------------------------------

--
-- Structure de la table `properties`
--

CREATE TABLE `properties` (
  `property_id` int(11) NOT NULL,
  `title_ar` varchar(255) NOT NULL,
  `title_en` varchar(255) DEFAULT NULL,
  `title_es` varchar(255) DEFAULT NULL,
  `title_fr` varchar(255) DEFAULT NULL,
  `title_de` varchar(255) DEFAULT NULL,
  `title_nl` varchar(255) DEFAULT NULL,
  `description_ar` text NOT NULL,
  `description_en` text DEFAULT NULL,
  `description_es` text DEFAULT NULL,
  `description_fr` text DEFAULT NULL,
  `description_de` text DEFAULT NULL,
  `description_nl` text DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `old_price` decimal(10,2) DEFAULT NULL,
  `location_ar` varchar(255) NOT NULL,
  `exact_address` varchar(255) NOT NULL,
  `location_en` varchar(255) DEFAULT NULL,
  `location_es` varchar(255) DEFAULT NULL,
  `location_fr` varchar(255) DEFAULT NULL,
  `location_de` varchar(255) DEFAULT NULL,
  `location_nl` varchar(255) DEFAULT NULL,
  `bedrooms` int(11) DEFAULT NULL,
  `salon` int(11) DEFAULT NULL,
  `bathrooms` int(11) DEFAULT NULL,
  `area` int(11) NOT NULL,
  `type` varchar(50) NOT NULL,
  `available` tinyint(1) DEFAULT 1,
  `availability_date` date DEFAULT NULL,
  `floors` int(11) DEFAULT NULL,
  `kitchen` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `properties`
--

INSERT INTO `properties` (`property_id`, `title_ar`, `title_en`, `title_es`, `title_fr`, `title_de`, `title_nl`, `description_ar`, `description_en`, `description_es`, `description_fr`, `description_de`, `description_nl`, `price`, `old_price`, `location_ar`, `exact_address`, `location_en`, `location_es`, `location_fr`, `location_de`, `location_nl`, `bedrooms`, `salon`, `bathrooms`, `area`, `type`, `available`, `availability_date`, `floors`, `kitchen`) VALUES
(58, 'شقة ', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 2500.00, NULL, 'فاس', '', 'Pasture', 'Pastar', 'Pâturage', 'Weide', 'Weiland', 1, 1, 1, 90, 'rent', 1, '0000-00-00', 0, 1),
(61, 'شقة مفروشة واسعة', 'Wide furnished apartment', 'Apartamento amueblado', 'Appartement largement meublé', 'Weit eingerichtete Wohnung', 'Wijd ingericht appartement', 'شقة مفروشة واسعة', 'Wide furnished apartment', 'Apartamento amueblado', 'Appartement largement meublé', 'Weit eingerichtete Wohnung', 'Wijd ingericht appartement', 2500.00, NULL, 'فاس', '', 'Pasture', 'Pastar', 'Pâturage', 'Weide', 'Weiland', 1, 1, 1, 90, 'rent', 1, NULL, NULL, 1),
(65, 'شقة مفروشة واسعة', 'Wide furnished apartment', 'Apartamento amueblado', 'Appartement largement meublé', 'Weit eingerichtete Wohnung', 'Wijd ingericht appartement', 'شقة مفروشة واسعة', 'Wide furnished apartment', 'Apartamento amueblado', 'Appartement largement meublé', 'Weit eingerichtete Wohnung', 'Wijd ingericht appartement', 250.00, 2500.00, 'فاس', '7335+6WC Beni Ansar', 'Pasture', 'Pastar', 'Pâturage', 'Weide', 'Weiland', 1, 1, 1, 90, 'rent', 1, '0000-00-00', 0, 1),
(67, 'شقة مفروشة واسعة', 'Wide furnished apartment', 'Apartamento amueblado', 'Appartement largement meublé', 'Weit eingerichtete Wohnung', 'Wijd ingericht appartement', 'شقة مفروشة واسعة', 'Wide furnished apartment', 'Apartamento amueblado', 'Appartement largement meublé', 'Weit eingerichtete Wohnung', 'Wijd ingericht appartement', 2500.00, NULL, 'فاس', '', 'Pasture', 'Pastar', 'Pâturage', 'Weide', 'Weiland', 1, 1, 1, 10, 'rent', 1, '0000-00-00', 0, 1),
(68, 'شقة مفروشة واسعة', 'Wide furnished apartment', 'Apartamento amueblado', 'Appartement largement meublé', 'Weit eingerichtete Wohnung', 'Wijd ingericht appartement', 'شقة مفروشة واسعة', 'Wide furnished apartment', 'Apartamento amueblado', 'Appartement largement meublé', 'Weit eingerichtete Wohnung', 'Wijd ingericht appartement', 2500.00, NULL, 'فاس', '', 'Pasture', 'Pastar', 'Pâturage', 'Weide', 'Weiland', 1, 1, 1, 90, 'rent', 1, NULL, NULL, 1),
(82, 'ارض', 'land', 'tierra', 'atterrir', 'Land', 'land', 'ارض', 'land', 'tierra', 'atterrir', 'Land', 'land', 10.00, 554515.00, 'الناضور', '7379+44W, Beni Ansar', 'Nador', 'Nador', 'Nador', 'Nador', 'Nador', 1, 1, 1, 144, 'rent', 1, '0000-00-00', 0, 1),
(83, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 9.00, NULL, 'بني انصار، الطريق الرئيسية حي عبد المومن', '', 'Bani Ansar, the main road, Abdul Mumin neighborhood', 'Bani Ansar, el camino principal, Abdul Mumin Barrio', 'Bani Ansar, la route principale, quartier Abdul Mumin', 'Bani Ansar, die Hauptstraße, Abdul Mumin Viertel', 'Bani Ansar, The Main Road, Abdul Mumin Neighborhood', 1, 1, 1, 90, 'regularRent', 0, NULL, 1, 1),
(93, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 4.00, 11.00, 'بني انصارحي عبد ', '', 'Bani Insahi Abd Bani', 'Bani insahi abd bani', 'Bani insahi Abd Bani', 'Bani Insahi Abd Bani', 'Bani Insahi Abd Bani', 0, 0, 0, 11, 'Commercialgarages', 0, '0000-00-00', 0, 0),
(100, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 11.00, NULL, 'بني انصارحي عبد المومن', '', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 1, 1, 1, 11, 'regularRent', 0, NULL, 5, 1),
(101, 'شقة للكراء:لا ها ،ا', 'Apartment for rental: No, a, a', 'Apartamento para alquiler: no, a, un', 'Appartement pour la location: Non, A, A', 'Wohnung für Miete: Nein, a, a', 'Appartement voor verhuur: nee, a, a', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'شقة للكراء', 'Wohnung zur Miete', 'Appartement te huur', 11.00, NULL, 'بني انصارحي عبد المومن', '7379+44W, Beni Ansar', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'بني انصارحي عبد المومن', 'بني انصارحي عبد المومن', 'Bani Insahi Abdul Mumin', 111, 1, 1, 11, 'buy', 0, '0000-00-00', 1, 1),
(102, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 8.00, 11.00, 'بني انصارحي عبد المومن', '', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 1, 1, 1, 11, 'rent', 1, '0000-00-00', 0, 1),
(103, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 11.00, NULL, 'بني انصارحي عبد المومن', '', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', NULL, NULL, NULL, 11, 'floorplots', 0, NULL, NULL, NULL),
(104, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 11.00, NULL, 'بني انصارحي عبد المومن', '', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', NULL, NULL, NULL, 11, 'floorplots', 0, NULL, NULL, NULL),
(105, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء ليس في المغرب', 'Apartment for rental is not in Morocco', 'El apartamento para alquiler no está en Marruecos', 'L\'appartement pour la location n\'est pas au Maroc', 'Wohnung für die Miete ist nicht in Marokko', 'Appartement voor huur is niet in Marokko', 11.00, NULL, 'بني انصارحي عبد المومن', '53C9+37 Nador, Maroc', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 1, 1, 1, 11, 'rent', 1, '0000-00-00', 0, 1),
(106, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 11.00, NULL, 'بني انصارحي عبد المومن', '', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', NULL, NULL, NULL, 11, 'floorplots', 0, NULL, NULL, NULL),
(107, 'منزل للبيع', 'House for sale', 'Casa en venta', 'Maison à vendre', 'Haus zum Verkauf', 'Huis te koop', 'منزل للبيع', 'House for sale', 'Casa en venta', 'Maison à vendre', 'Haus zum Verkauf', 'Huis te koop', 4.00, NULL, '1', '', '1', '1', '1', '1', '1', NULL, NULL, NULL, 1, 'floorplots', 0, NULL, NULL, NULL),
(113, 'كاراج للكراء', 'Garage', 'Cochera', 'Garage', 'Garage', 'Garage', 'كاراج للكراء', 'Garage', 'Cochera', 'Garage', 'Garage', 'Garage', 89.00, 90.00, 'الناظور', '', 'Nador', 'Nador', 'Nador', 'Nador', 'Nador', 0, 0, 0, 50, 'Commercialgarages', 0, '0000-00-00', 0, 0),
(114, 'كاراج للكراء', 'Garage', 'Cochera', 'Garage', 'Garage', 'Garage', 'كاراج للكراء', 'Garage', 'Cochera', 'Garage', 'Garage', 'Garage', 1.00, NULL, 'الناظور', '', 'Nador', 'Nador', 'Nador', 'Nador', 'Nador', NULL, NULL, NULL, 50, 'Commercialgarages', 0, NULL, NULL, NULL),
(118, 'كاراج للكراء', 'Garage', 'Cochera', 'Garage', 'Garage', 'Garage', 'كاراج للكراء', 'Garage', 'Cochera', 'Garage', 'Garage', 'Garage', 99.00, NULL, 'الناظور', '', 'Nador', 'Nador', 'Nador', 'Nador', 'Nador', 99, 99, 99, 99, 'Commercialgarages', 0, NULL, 99, 99),
(120, 'شقة', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', 'كتاب', 'book', 'libro', 'livre', 'Buch', 'boek', 1.00, NULL, 'شقة', '', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', NULL, NULL, NULL, 1, 'Commercialgarages', 0, NULL, NULL, NULL),
(122, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 7.00, NULL, 'الناظور', '7369+RFR, Beni Ansar', 'Nador', 'Nador', 'Nador', 'Nador', 'Nador', 7, 7, 7, 7, 'rent', 1, '0000-00-00', 0, 7),
(123, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', 1999.00, NULL, 'شقة', '', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', NULL, NULL, NULL, 1999, 'Commercialgarages', 0, NULL, NULL, NULL),
(124, 'شقة', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', 'شقة', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', 7777.00, NULL, 'شقة', '', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', 1, 1, 1, 1, 'buy', 0, NULL, 1, 1),
(125, 'شقة', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', 'شقة', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', 7777.00, NULL, 'شقة', '', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', 1, 1, 1, 1, 'buy', 0, NULL, 1, 1),
(126, 'الرئيس بوتين', 'President Putin', 'Presidente Putin', 'Président Poutine', 'Präsident Putin', 'President Poetin', 'أكد الناطق باسم الكرملين، ديمتري بيسكوف، الجمعة، أن الرئيس الروسي فلاديمير بوتين منفتح على أي اتصالات، بما في ذلك مع نظيره الأميركي جو بايدن.\r\n\r\nوأشار إلى أنه حتى الآن لم يكن هناك حديث حول هذه القضية بين موسكو وواشنطن، وأن القرار بشأن زيارة الرئيس بوتين إلى البرازيل لحضور قمة مجموعة العشرين لم يتخذ حتى الآن.', 'The Kremlin spokesman, Dmitry Peskov, confirmed on Friday that Russian President Vladimir Putin is open to any contacts, including with his American counterpart, Joe Biden.\r\n\r\n He pointed out that until now there was no talk about this issue between Moscow and Washington, and that the decision on President Putin\'s visit to Brazil to attend the G20 summit has not been taken yet.', 'El portavoz del Kremlin, Dmitry Peskov, confirmó el viernes que el presidente ruso Vladimir Putin está abierto a cualquier contacto, incluso con su homólogo estadounidense, Joe Biden.\r\n\r\n Señaló que hasta ahora no se hablaba de este problema entre Moscú y Washington, y que la decisión sobre la visita del presidente Putin a Brasil para asistir a la cumbre del G20 aún no se ha tomado.', 'Le porte-parole du Kremlin, Dmitry Peskov, a confirmé vendredi que le président russe Vladimir Poutine était ouvert à tous les contacts, y compris avec son homologue américain, Joe Biden.\r\n\r\n Il a souligné que jusqu\'à présent, on ne parlait pas de cette question entre Moscou et Washington, et que la décision sur la visite du président Poutine au Brésil pour assister au sommet du G20 n\'a pas encore été prise.', 'Der Kreml -Sprecher Dmitry Peskov bestätigte am Freitag, dass der russische Präsident Wladimir Putin für Kontakte offen ist, einschließlich seines amerikanischen Gegenstücks Joe Biden.\r\n\r\n Er wies darauf hin, dass es bisher kein Gespräch über dieses Problem zwischen Moskau und Washington gab und dass die Entscheidung über den Besuch von Präsident Putins in Brasilien, am G20 -Gipfel teilzunehmen, noch nicht getroffen wurde.', 'De woordvoerder van Kremlin, Dmitry Peskov, bevestigde vrijdag dat de Russische president Vladimir Poetin openstaat voor eventuele contacten, ook met zijn Amerikaanse tegenhanger, Joe Biden.\r\n\r\n Hij wees erop dat er tot nu toe geen sprake was van deze kwestie tussen Moskou en Washington, en dat de beslissing over het bezoek van president Poetin aan Brazilië om de G20 -top bij te wonen nog niet is genomen.', 121.00, 7777.00, 'بني انصار, حي مسجد النور', '7379+44W, Beni Ansar', 'Bani Ansar, Al -Nour Mosque neighborhood', 'Bani Ansar, vecindario de la mezquita de Al -Nour', 'Bani Ansar, quartier de la mosquée al -nour', 'Bani Ansar, Al -Nour -Moschee -Nachbarschaft', 'Bani Ansar, Al -Nour Moskee Neighborhood', 1, 1, 1, 1, 'buy', 0, '0000-00-00', 1, 1),
(127, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 1999.00, NULL, 'شقة', '7379+44W, Beni Ansar', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', NULL, NULL, NULL, 1999, 'floorplots', 0, NULL, NULL, NULL),
(128, 'الرئيس بوتين', 'President Putin', 'Presidente Putin', 'Président Poutine', 'Präsident Putin', 'President Poetin', 'الرئيس بوتين', 'President Putin', 'Presidente Putin', 'Président Poutine', 'Präsident Putin', 'President Poetin', 7777.00, NULL, 'بني انصار, حي مسجد النور', '7379+44W, Beni Ansar', 'Bani Ansar, Al -Nour Mosque neighborhood', 'Bani Ansar, vecindario de la mezquita de Al -Nour', 'Bani Ansar, quartier de la mosquée al -nour', 'Bani Ansar, Al -Nour -Moschee -Nachbarschaft', 'Bani Ansar, Al -Nour Moskee Neighborhood', 1, 1, 1, 1, 'regularRent', 0, NULL, 1, 1),
(129, 'شقة للكراء مع شقة للكراء', 'Apartment for rental with an apartment for rent', 'Apartamento para alquiler con un apartamento en alquiler', 'Appartement pour la location avec un appartement à louer', 'Wohnung für Miete mit einer Wohnung zur Miete', 'Appartement voor verhuur met een appartement te huur', 'شقة للكراء مع شقة للكراء', 'Apartment for rental with an apartment for rent', 'Apartamento para alquiler con un apartamento en alquiler', 'Appartement pour la location avec un appartement à louer', 'Wohnung für Miete mit einer Wohnung zur Miete', 'Appartement voor verhuur met een appartement te huur', 199.00, 1999.00, 'شقة', '7379+V54, Beni Ansar', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', 0, 0, 0, 1999, 'floorplots', 0, '0000-00-00', 0, 0),
(130, ' قط', 'cat', 'gato', 'chat', 'Katze', 'kat', 'شقة للكراء مع شقة قط', 'Apartment for rental with an apartment cat', 'Apartamento para alquiler con un gato de apartamento', 'Appartement pour la location avec un chat appartement', 'Wohnung zur Miete mit einer Wohnungskatze', 'Appartement voor verhuur met een appartementkat', 1999.00, NULL, 'شقة', '7379+V54, Beni Ansar', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', 1, 1, 1, 1999, 'rent', 1, NULL, NULL, 1),
(131, ' 33 شقة مفروشة واسعة', '33 spacious furnished apartments', '33 apartamentos amueblados espaciosos', '33 appartements meublés spacieux', '33 geräumige möblierte Wohnungen', '33 Ruim gemeubileerde appartementen', ' 33 شقة مفروشة واسعة', '33 spacious furnished apartments', '33 apartamentos amueblados espaciosos', '33 appartements meublés spacieux', '33 geräumige möblierte Wohnungen', '33 Ruim gemeubileerde appartementen', 33.00, NULL, 'فاس', '7379+44W, Beni Ansar', 'Pasture', 'Pastar', 'Pâturage', 'Weide', 'Weiland', 1, 1, 1, 1, 'rent', 1, NULL, NULL, 1),
(132, ' 33 شقة مفروشة واسعة', '33 spacious furnished apartments', '33 apartamentos amueblados espaciosos', '33 appartements meublés spacieux', '33 geräumige möblierte Wohnungen', '33 Ruim gemeubileerde appartementen', ' 33 شقة مفروشة واسعة', '33 spacious furnished apartments', '33 apartamentos amueblados espaciosos', '33 appartements meublés spacieux', '33 geräumige möblierte Wohnungen', '33 Ruim gemeubileerde appartementen', 33.00, NULL, 'فاس', '7379+44W, Beni Ansar', 'Pasture', 'Pastar', 'Pâturage', 'Weide', 'Weiland', NULL, NULL, NULL, 1, 'Commercialgarages', 0, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `property_images`
--

CREATE TABLE `property_images` (
  `image_id` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `is_main` tinyint(1) DEFAULT 0,
  `display_order` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `property_images`
--

INSERT INTO `property_images` (`image_id`, `property_id`, `image_url`, `created_at`, `is_main`, `display_order`) VALUES
(156, 58, '1724088025382.jpg', '2024-08-19 17:20:25', 1, 0),
(160, 61, '1724142558436.jpg', '2024-08-20 08:29:18', 1, 0),
(164, 65, '1724152559928.jpg', '2024-08-20 11:16:00', 1, 0),
(166, 67, '1724154819302.jpg', '2024-08-20 11:53:39', 1, 0),
(167, 68, '1724154819377.jpg', '2024-08-20 11:53:39', 1, 0),
(181, 82, '1724176325590.png', '2024-08-20 17:52:05', 1, 0),
(182, 83, '1724176708531.png', '2024-08-20 17:58:28', 1, 0),
(202, 93, '1724842218730.PNG', '2024-08-28 10:50:18', 1, 0),
(209, 100, '1725263467191.jpg', '2024-09-02 07:51:07', 1, 0),
(210, 101, '1725272809289.jpg', '2024-09-02 10:26:49', 1, 0),
(211, 102, '1725295610418.jpg', '2024-09-02 16:46:50', 1, 0),
(212, 102, '1725295610471.jpg', '2024-09-02 16:46:50', 0, 1),
(213, 102, '1725295610511.jpg', '2024-09-02 16:46:50', 0, 2),
(214, 102, '1725295610551.jpg', '2024-09-02 16:46:50', 0, 3),
(215, 103, '1725298567926.jpg', '2024-09-02 17:36:07', 1, 0),
(216, 104, '1725351811385.jpg', '2024-09-03 08:23:31', 1, 0),
(217, 104, '1725351811449.jpg', '2024-09-03 08:23:31', 0, 1),
(218, 104, '1725351811495.jpg', '2024-09-03 08:23:31', 0, 2),
(219, 105, '1725448061944.jpg', '2024-09-04 11:07:42', 1, 0),
(220, 105, '1725448062102.jpg', '2024-09-04 11:07:42', 0, 1),
(221, 105, '1725448062164.jpg', '2024-09-04 11:07:42', 0, 2),
(222, 105, '1725448062220.jpg', '2024-09-04 11:07:42', 0, 3),
(223, 105, '1725448062277.jpg', '2024-09-04 11:07:42', 0, 4),
(224, 105, '1725448062333.jpg', '2024-09-04 11:07:42', 0, 5),
(225, 105, '1725448062391.jpg', '2024-09-04 11:07:42', 0, 6),
(226, 105, '1725448062445.jpg', '2024-09-04 11:07:42', 0, 7),
(227, 106, '1726133473343.jpg', '2024-09-12 09:31:13', 1, 0),
(228, 107, '1726143730119.jpg', '2024-09-12 12:22:10', 1, 0),
(235, 113, '1726826994659.jpg', '2024-09-20 10:09:54', 1, 0),
(236, 114, '1727004582788.jpg', '2024-09-22 11:29:42', 1, 0),
(249, 118, '1727432010353.jpg', '2024-09-27 10:13:30', 1, 0),
(250, 118, '1727432010456.jpg', '2024-09-27 10:13:30', 0, 1),
(251, 118, '1727432010558.jpg', '2024-09-27 10:13:30', 0, 2),
(252, 118, '1727432010667.jpg', '2024-09-27 10:13:30', 0, 3),
(261, 120, '1727600882532.jpg', '2024-09-29 09:08:02', 1, 0),
(262, 120, '1727600882585.jpg', '2024-09-29 09:08:02', 0, 1),
(263, 120, '1727600882662.jpg', '2024-09-29 09:08:02', 0, 2),
(264, 120, '1727600882732.jpg', '2024-09-29 09:08:02', 0, 3),
(267, 122, '1727601295342.png', '2024-09-29 09:14:55', 1, 0),
(268, 123, '1727718198186.png', '2024-09-30 17:43:18', 1, 0),
(269, 124, '1727794573443.jpg', '2024-10-01 14:56:13', 1, 0),
(270, 124, '1727794573538.jpg', '2024-10-01 14:56:13', 0, 1),
(271, 125, '1727887942761.jpg', '2024-10-02 16:52:23', 1, 0),
(272, 125, '1727887942864.jpg', '2024-10-02 16:52:23', 0, 1),
(273, 125, '1727887942930.jpg', '2024-10-02 16:52:23', 0, 2),
(274, 125, '1727887942996.jpg', '2024-10-02 16:52:23', 0, 3),
(275, 125, '1727887943066.jpg', '2024-10-02 16:52:23', 0, 4),
(276, 125, '1727887943233.jpg', '2024-10-02 16:52:23', 0, 5),
(277, 125, '1727887943384.jpg', '2024-10-02 16:52:23', 0, 6),
(278, 126, '1728041474877.jpg', '2024-10-04 11:31:16', 1, 0),
(279, 126, '1728041475045.jpg', '2024-10-04 11:31:16', 0, 1),
(280, 126, '1728041475117.jpg', '2024-10-04 11:31:16', 0, 2),
(281, 126, '1728041475180.jpg', '2024-10-04 11:31:16', 0, 3),
(282, 126, '1728041475246.jpg', '2024-10-04 11:31:16', 0, 4),
(283, 126, '1728041475314.jpg', '2024-10-04 11:31:16', 0, 5),
(284, 126, '1728041475383.jpg', '2024-10-04 11:31:16', 0, 6),
(285, 126, '1728041475450.jpg', '2024-10-04 11:31:16', 0, 7),
(286, 126, '1728041475507.jpg', '2024-10-04 11:31:16', 0, 8),
(287, 126, '1728041475590.jpg', '2024-10-04 11:31:16', 0, 9),
(288, 126, '1728041475661.jpg', '2024-10-04 11:31:16', 0, 10),
(289, 126, '1728041475731.jpg', '2024-10-04 11:31:16', 0, 11),
(290, 126, '1728041475811.jpg', '2024-10-04 11:31:16', 0, 12),
(291, 126, '1728041475884.jpg', '2024-10-04 11:31:16', 0, 13),
(292, 126, '1728041475945.jpg', '2024-10-04 11:31:16', 0, 14),
(293, 126, '1728041476009.jpg', '2024-10-04 11:31:16', 0, 15),
(294, 126, '1728041476079.jpg', '2024-10-04 11:31:16', 0, 16),
(295, 126, '1728041476137.jpg', '2024-10-04 11:31:16', 0, 17),
(296, 126, '1728041476206.jpg', '2024-10-04 11:31:16', 0, 18),
(297, 127, '1728207177318-723726738.jpg', '2024-10-06 09:32:57', 1, 0),
(298, 128, '1728208891033-442079158.jpg', '2024-10-06 10:01:31', 1, 0),
(299, 129, '1728234780516-565404735.jpg', '2024-10-06 17:13:00', 1, 0),
(300, 130, '1728400900789-695909004.jpg', '2024-10-08 15:21:41', 1, 0),
(301, 130, '1728400900950-965452868.jpg', '2024-10-08 15:21:41', 0, 1),
(302, 130, '1728400901054-324210536.jpg', '2024-10-08 15:21:41', 0, 2),
(303, 131, '1731250182836-749315279.jpg', '2024-11-10 14:49:42', 1, 0),
(304, 131, '1731250182866-858488205.jpg', '2024-11-10 14:49:42', 0, 1),
(305, 132, '1732185755468-712961186.jpg', '2024-11-21 10:42:35', 1, 0),
(306, 132, '1732185755549-488937286.jpg', '2024-11-21 10:42:35', 0, 1),
(307, 132, '1732185755588-802931192.jpg', '2024-11-21 10:42:35', 0, 2),
(308, 132, '1732185755614-256256335.jpg', '2024-11-21 10:42:35', 0, 3),
(309, 132, '1732185755642-140930135.jpg', '2024-11-21 10:42:35', 0, 4),
(310, 132, '1732185755670-950690340.jpg', '2024-11-21 10:42:35', 0, 5),
(311, 132, '1732185755695-859660512.jpg', '2024-11-21 10:42:35', 0, 6),
(312, 132, '1732185755715-895447229.jpg', '2024-11-21 10:42:35', 0, 7),
(313, 132, '1732185755747-224599958.jpg', '2024-11-21 10:42:35', 0, 8),
(314, 132, '1732185755771-358388010.jpg', '2024-11-21 10:42:35', 0, 9);

-- --------------------------------------------------------

--
-- Structure de la table `share_stats`
--

CREATE TABLE `share_stats` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `property_id` int(11) DEFAULT NULL,
  `share_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `share_stats`
--

INSERT INTO `share_stats` (`id`, `property_id`, `share_time`) VALUES
(1, 125, '2024-11-24 11:27:13'),
(2, 114, '2024-11-24 11:32:04'),
(3, 103, '2024-11-24 11:37:39'),
(4, 104, '2024-11-24 11:37:42');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `created_at`) VALUES
(1, 'alaqariyya@gmail.com', '$2a$10$O16UNpO8FdP6DVQGp37E4u4MxAgo9CxsteHYOg3qqQYRskxFPTwb2', '2024-06-06 09:20:10');

-- --------------------------------------------------------

--
-- Structure de la table `visitor_details`
--

CREATE TABLE `visitor_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `ip_address` varchar(45) NOT NULL,
  `country` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `visit_count` bigint(20) UNSIGNED DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `visitor_details`
--

INSERT INTO `visitor_details` (`id`, `ip_address`, `country`, `city`, `visit_count`) VALUES
(1, '::1', 'Unknown', 'Unknown', 10);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `clickcount_stats`
--
ALTER TABLE `clickcount_stats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `property_id` (`property_id`);

--
-- Index pour la table `contact_submissions`
--
ALTER TABLE `contact_submissions`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `properties`
--
ALTER TABLE `properties`
  ADD PRIMARY KEY (`property_id`);

--
-- Index pour la table `property_images`
--
ALTER TABLE `property_images`
  ADD PRIMARY KEY (`image_id`),
  ADD KEY `property_id` (`property_id`);

--
-- Index pour la table `share_stats`
--
ALTER TABLE `share_stats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `property_id` (`property_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `visitor_details`
--
ALTER TABLE `visitor_details`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `clickcount_stats`
--
ALTER TABLE `clickcount_stats`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `contact_submissions`
--
ALTER TABLE `contact_submissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT pour la table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT pour la table `properties`
--
ALTER TABLE `properties`
  MODIFY `property_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=133;

--
-- AUTO_INCREMENT pour la table `property_images`
--
ALTER TABLE `property_images`
  MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=315;

--
-- AUTO_INCREMENT pour la table `share_stats`
--
ALTER TABLE `share_stats`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `visitor_details`
--
ALTER TABLE `visitor_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `clickcount_stats`
--
ALTER TABLE `clickcount_stats`
  ADD CONSTRAINT `clickcount_stats_ibfk_1` FOREIGN KEY (`property_id`) REFERENCES `properties` (`property_id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `property_images`
--
ALTER TABLE `property_images`
  ADD CONSTRAINT `property_images_ibfk_1` FOREIGN KEY (`property_id`) REFERENCES `properties` (`property_id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `share_stats`
--
ALTER TABLE `share_stats`
  ADD CONSTRAINT `share_stats_ibfk_1` FOREIGN KEY (`property_id`) REFERENCES `properties` (`property_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
