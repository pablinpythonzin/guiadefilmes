/* =========================================================
   🍿 POPCORN HUB — SCRIPT.JS
   ========================================================= */

const filmes = [
    {
        id: 1,
        titulo: "Vingadores: Ultimato",
        genero: "pop",
        generoNome: "Pop",
        sinopse: "Após o estalo de Thanos dizimar metade do universo, os Vingadores remanescentes se unem numa última missão para desfazer a tragédia e enfrentar o titã louco de vez.",
        classificacao: "12",
        nota: "8.4",
        capa: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
        trailerId: "TcMBFSGVi1c",
        destaque: true
    },
    {
        id: 2,
        titulo: "Pantera Negra",
        genero: "pop",
        generoNome: "Pop",
        sinopse: "T'Challa retorna a Wakanda para assumir o trono, mas precisa proteger seu povo e o vibranium de ameaças que colocam em risco o futuro da nação mais avançada do planeta.",
        classificacao: "12",
        nota: "7.3",
        capa: "https://upload.wikimedia.org/wikipedia/en/d/d6/Black_Panther_%28film%29_poster.jpg",
        trailerId: "xjDjIWPwcPU"
    },
    {
        id: 3,
        titulo: "Jurassic Park",
        genero: "pop",
        generoNome: "Pop",
        sinopse: "Um bilionário cria um parque temático com dinossauros clonados a partir de DNA fóssil, mas uma falha de segurança transforma a atração em um pesadelo de sobrevivência.",
        classificacao: "12",
        nota: "8.2",
        capa: "https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg",
        trailerId: "QWBKEmWWL38"
    },
    {
        id: 4,
        titulo: "Homem-Aranha: Sem Volta Para Casa",
        genero: "pop",
        generoNome: "Pop",
        sinopse: "Peter Parker precisa lidar com as consequências de sua identidade revelada e acaba enfrentando vilões de outros universos ao pedir ajuda ao Doutor Estranho.",
        classificacao: "12",
        nota: "8.2",
        capa: "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg",
        trailerId: "JfVOs4VSpmA"
    },
    {
        id: 5,
        titulo: "Interestelar",
        genero: "ficcao",
        generoNome: "Ficção Científica",
        sinopse: "Um grupo de astronautas atravessa um buraco de minhoca em busca de um novo lar para a humanidade, enquanto o tempo passa de forma diferente para quem fica na Terra.",
        classificacao: "10",
        nota: "8.7",
        capa: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
        trailerId: "zSWdZVtXT7E",
        destaque: true
    },
    {
        id: 6,
        titulo: "Duna",
        genero: "ficcao",
        generoNome: "Ficção Científica",
        sinopse: "O jovem Paul Atreides é levado ao planeta deserto Arrakis, onde disputas por uma valiosa especiaria decidem o destino de famílias e impérios em toda a galáxia.",
        classificacao: "12",
        nota: "8.0",
        capa: "https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg",
        trailerId: "8g18jFHCLXk",
        destaque: true
    },
    {
        id: 7,
        titulo: "Matrix",
        genero: "ficcao",
        generoNome: "Ficção Científica",
        sinopse: "Um programador descobre que a realidade que conhece é uma simulação controlada por máquinas e precisa escolher entre a verdade dolorosa e a ilusão confortável.",
        classificacao: "16",
        nota: "8.7",
        capa: "https://upload.wikimedia.org/wikipedia/en/d/db/The_Matrix.png",
        trailerId: "vKQi3bBA1y8",
        destaque: true
    },
    {
        id: 8,
        titulo: "Avatar: O Caminho da Água",
        genero: "ficcao",
        generoNome: "Ficção Científica",
        sinopse: "Jake Sully e sua família enfrentam novas ameaças enquanto buscam refúgio entre os povos dos oceanos de Pandora para proteger o que restou de seu lar.",
        classificacao: "12",
        nota: "7.6",
        capa: "https://upload.wikimedia.org/wikipedia/en/5/54/Avatar_The_Way_of_Water_poster.jpg",
        trailerId: "d9MyW72ELq0"
    },
    {
        id: 9,
        titulo: "Bohemian Rhapsody",
        genero: "vidareal",
        generoNome: "Vida Real",
        sinopse: "A trajetória de Freddie Mercury e do Queen, da formação da banda ao histórico show no Live Aid, mostrando os bastidores de uma das carreiras mais icônicas do rock.",
        classificacao: "14",
        nota: "7.9",
        capa: "https://upload.wikimedia.org/wikipedia/en/2/2e/Bohemian_Rhapsody_poster.png",
        trailerId: "mP0VHJYFOAU",
        destaque: true
    },
    {
        id: 10,
        titulo: "A Rede Social",
        genero: "vidareal",
        generoNome: "Vida Real",
        sinopse: "A história real da criação do Facebook por Mark Zuckerberg em Harvard, e os conflitos e processos judiciais que surgiram junto com o sucesso da rede social.",
        classificacao: "12",
        nota: "7.7",
        capa: "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Social_Network_film_poster.png",
        trailerId: "lB95KLmpLR4"
    },
    {
        id: 11,
        titulo: "Oppenheimer",
        genero: "vidareal",
        generoNome: "Vida Real",
        sinopse: "A história do físico J. Robert Oppenheimer e de seu papel no desenvolvimento da bomba atômica durante o Projeto Manhattan, e o peso moral que carregou depois.",
        classificacao: "16",
        nota: "8.3",
        capa: "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg",
        trailerId: "uYPbbksJxIg",
        destaque: true
    },
    {
        id: 12,
        titulo: "Prenda-me Se For Capaz",
        genero: "vidareal",
        generoNome: "Vida Real",
        sinopse: "Baseado em fatos reais, acompanha Frank Abagnale Jr., um dos falsificadores mais talentosos da história, e o agente do FBI obcecado em capturá-lo.",
        classificacao: "12",
        nota: "8.1",
        capa: "https://upload.wikimedia.org/wikipedia/en/4/4d/Catch_Me_If_You_Can_2002_movie.jpg",
        trailerId: "TdAKzpZ23w4"
    },
    {
        id: 13,
        titulo: "La La Land",
        genero: "romance",
        generoNome: "Romance",
        sinopse: "Uma atriz em início de carreira e um pianista de jazz se apaixonam em Los Angeles, enquanto tentam equilibrar seus sonhos profissionais e o amor entre os dois.",
        classificacao: "L",
        nota: "8.0",
        capa: "https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png",
        trailerId: "0pdqf4P9MB8"
    },
    {
        id: 14,
        titulo: "Diário de uma Paixão",
        genero: "romance",
        generoNome: "Romance",
        sinopse: "Um casal de jovens apaixonados é separado pela diferença de classe social e pela guerra, mas o amor que viveram décadas antes ainda ecoa em suas vidas.",
        classificacao: "14",
        nota: "7.8",
        capa: "https://upload.wikimedia.org/wikipedia/en/8/86/Posternotebook.jpg",
        trailerId: "BjJcYdEOI0k"
    },
    {
        id: 15,
        titulo: "Titanic",
        genero: "romance",
        generoNome: "Romance",
        sinopse: "A bordo do transatlântico mais famoso da história, uma jovem da alta sociedade e um artista pobre vivem um romance intenso que é interrompido pela tragédia do naufrágio.",
        classificacao: "12",
        nota: "7.9",
        capa: "https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png",
        trailerId: "2e-eXJ6HgkQ",
        destaque: true
    },
    {
        id: 16,
        titulo: "Como Eu Era Antes de Você",
        genero: "romance",
        generoNome: "Romance",
        sinopse: "Uma jovem sem rumo na vida é contratada para cuidar de um homem que ficou tetraplégico após um acidente, e os dois acabam transformando a visão um do outro sobre a vida.",
        classificacao: "14",
        nota: "7.5",
        capa: "https://upload.wikimedia.org/wikipedia/en/f/fd/Me_Before_You_%28film%29.jpg",
        trailerId: "Eh993__rOxA"
    },
    {
        id: 17,
        titulo: "O Diabo Veste Prada",
        genero: "comedia",
        generoNome: "Comédia",
        sinopse: "Uma recém-formada consegue emprego como assistente da temida editora-chefe de uma revista de moda e precisa sobreviver às exigências absurdas do mundo fashion.",
        classificacao: "12",
        nota: "7.6",
        capa: "https://upload.wikimedia.org/wikipedia/en/e/e7/The_Devil_Wears_Prada_main_onesheet.jpg",
        trailerId: "R8nH9qKXdBY"
    },
    {
        id: 18,
        titulo: "As Branquelas",
        genero: "comedia",
        generoNome: "Comédia",
        sinopse: "Dois agentes do FBI precisam se disfarçar como duas socialites para protegê-las de um sequestro e acabam vivendo situações cada vez mais hilárias.",
        classificacao: "12",
        nota: "6.0",
        capa: "https://upload.wikimedia.org/wikipedia/en/2/2b/White_chicks.jpg",
        trailerId: "aeVkbNka9HM"
    },
    {
        id: 19,
        titulo: "Se Beber, Não Case!",
        genero: "comedia",
        generoNome: "Comédia",
        sinopse: "Depois de uma despedida de solteiro em Las Vegas, três amigos acordam sem lembrar de nada e descobrem que o noivo sumiu, tendo poucas horas para encontrá-lo antes do casamento.",
        classificacao: "16",
        nota: "7.7",
        capa: "https://upload.wikimedia.org/wikipedia/en/b/b9/Hangoverposter09.jpg",
        trailerId: "dB2jElYbTIo"
    },
    {
        id: 20,
        titulo: "Guardiões da Galáxia Vol. 3",
        genero: "pop",
        generoNome: "Pop",
        sinopse: "Peter Quill ainda sofre com a perda de Gamora e precisa reunir sua equipe para uma missão perigosa que pode significar o fim dos Guardiões caso não seja bem-sucedida.",
        classificacao: "12",
        nota: "7.9",
        capa: "https://upload.wikimedia.org/wikipedia/en/7/74/Guardians_of_the_Galaxy_Vol._3_poster.jpg",
        trailerId: "28AuL3OHfuc"
    },
    {
        id: 21,
        titulo: "Invictus",
        genero: "vidareal",
        generoNome: "Vida Real",
        sinopse: "Baseado em fatos reais, mostra como Nelson Mandela usa a Copa do Mundo de rúgbi de 1995 para unir a África do Sul pós-apartheid em torno de um único objetivo.",
        classificacao: "12",
        nota: "7.3",
        capa: "https://upload.wikimedia.org/wikipedia/en/0/05/Invictus-poster.png",
        trailerId: "EchyFyRETzc"
    },
    {
        id: 22,
        titulo: "Simplesmente Amor",
        genero: "romance",
        generoNome: "Romance",
        sinopse: "Diversas histórias de amor se entrelaçam em Londres durante o período do Natal, mostrando diferentes faces do amor entre amigos, casais e famílias.",
        classificacao: "14",
        nota: "7.6",
        capa: "https://upload.wikimedia.org/wikipedia/en/e/eb/Love_Actually_movie.jpg",
        trailerId: "hJ-_H62To4A"
    },
    {
        id: 23,
        titulo: "Seu Nome",
        genero: "anime",
        generoNome: "Anime",
        sinopse: "Um garoto e uma garota que nunca se conheceram começam a trocar de corpo misteriosamente, e precisam descobrir a ligação entre eles antes que seja tarde demais.",
        classificacao: "L",
        nota: "8.4",
        capa: "https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.png",
        trailerId: "0T6PBmyExMk",
        destaque: true
    },
    {
        id: 24,
        titulo: "Demon Slayer: Mugen Train",
        genero: "anime",
        generoNome: "Anime",
        sinopse: "Tanjiro e seus companheiros embarcam no Trem Infinito para investigar desaparecimentos misteriosos e enfrentam um dos demônios mais poderosos já vistos.",
        classificacao: "14",
        nota: "8.2",
        capa: "https://upload.wikimedia.org/wikipedia/en/2/21/Kimetsu_no_Yaiba_Mugen_Ressha_Hen_Poster.jpg",
        trailerId: "ATJYac_dORw"
    },
    {
        id: 25,
        titulo: "Jujutsu Kaisen 0",
        genero: "anime",
        generoNome: "Anime",
        sinopse: "Yuta Okkotsu é assombrado por uma amiga de infância transformada em uma maldição poderosa e precisa aprender a controlar seus poderes na Escola Técnica de Feitiçaria de Jujutsu.",
        classificacao: "14",
        nota: "7.6",
        capa: "https://upload.wikimedia.org/wikipedia/en/4/46/Jujutsu_Kaisen_0_Cover.png",
        trailerId: "8QkHWlrHqlE"
    },
    {
        id: 26,
        titulo: "A Viagem de Chihiro",
        genero: "anime",
        generoNome: "Anime",
        sinopse: "Uma garota se muda com a família e acaba presa em um mundo espiritual repleto de deuses e monstros, onde precisa trabalhar em uma casa de banhos mágica para salvar seus pais.",
        classificacao: "L",
        nota: "8.5",
        capa: "https://upload.wikimedia.org/wikipedia/en/d/db/Spirited_Away_Japanese_poster.png",
        trailerId: "L5SjMRioGEk"
    },
    {
        id: 27,
        titulo: "One Piece Film: Red",
        genero: "anime",
        generoNome: "Anime",
        sinopse: "Uta, a cantora mais amada do mundo e filha secreta de Shanks, revela sua identidade em um grande show, e Luffy e os Chapéus de Palha se veem em meio a segredos perigosos do passado dela.",
        classificacao: "12",
        nota: "7.4",
        capa: "https://upload.wikimedia.org/wikipedia/en/4/44/One_Piece_Film_Red_Visual_Poster.jpg",
        trailerId: "eU0i7L3cakI"
    },
    {
        id: 28,
        titulo: "My Hero Academia: You're Next",
        genero: "anime",
        generoNome: "Anime",
        sinopse: "No filme mais recente da franquia, Deku e seus colegas de Yuei enfrentam um vilão que ataca diretamente a essência do que significa ser um herói, em uma das maiores batalhas da série.",
        classificacao: "12",
        nota: "7.5",
        capa: "https://upload.wikimedia.org/wikipedia/en/1/13/My_Hero_Academia_-_You%27re_Next.png",
        trailerId: "HzSVqFy7NsQ",
        destaque: true
    },
    {
        id: 29,
        titulo: "It: A Coisa",
        genero: "terror",
        generoNome: "Terror",
        sinopse: "Um grupo de crianças de uma pequena cidade precisa enfrentar um ser sobrenatural que assume a forma de um palhaço assustador e se alimenta do medo de suas vítimas.",
        classificacao: "16",
        nota: "7.3",
        capa: "https://upload.wikimedia.org/wikipedia/en/5/5a/It_%282017%29_poster.jpg",
        trailerId: "A4PuQCWDcM4"
    },
    {
        id: 30,
        titulo: "Invocação do Mal",
        genero: "terror",
        generoNome: "Terror",
        sinopse: "Um casal de investigadores paranormais é chamado para ajudar uma família aterrorizada por uma presença sombria em sua fazenda isolada.",
        classificacao: "14",
        nota: "7.5",
        capa: "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Conjuring_poster.jpg",
        trailerId: "LPR-z0l8xQo"
    },
    {
        id: 31,
        titulo: "Piratas do Caribe: A Maldição do Black Pearl",
        genero: "aventura",
        generoNome: "Aventura",
        sinopse: "O excêntrico pirata Jack Sparrow se une a um jovem ferreiro para resgatar a filha do governador, sequestrada pela tripulação amaldiçoada do navio Pérola Negra.",
        classificacao: "12",
        nota: "8.0",
        capa: "https://upload.wikimedia.org/wikipedia/en/8/89/Pirates_of_the_Caribbean_-_The_Curse_of_the_Black_Pearl.png",
        trailerId: "uEQDmDV7PUs"
    },
    {
        id: 32,
        titulo: "Indiana Jones e os Caçadores da Arca Perdida",
        genero: "aventura",
        generoNome: "Aventura",
        sinopse: "O arqueólogo aventureiro Indiana Jones corre contra o tempo para encontrar a lendária Arca da Aliança antes que ela caia nas mãos dos nazistas.",
        classificacao: "12",
        nota: "8.4",
        capa: "https://upload.wikimedia.org/wikipedia/en/4/4c/Raiders_of_the_Lost_Ark.jpg",
        trailerId: "ZQAwr0eOTgM"
    },
    {
        id: 33,
        titulo: "Corra!",
        genero: "suspense",
        generoNome: "Suspense",
        sinopse: "Um jovem negro visita a família da namorada branca pela primeira vez e aos poucos descobre segredos perturbadores escondidos por trás da hospitalidade da família.",
        classificacao: "16",
        nota: "7.7",
        capa: "https://upload.wikimedia.org/wikipedia/en/a/a3/Get_Out_poster.png",
        trailerId: "DzfpyUB60YY"
    },
    {
        id: 34,
        titulo: "Garota Exemplar",
        genero: "suspense",
        generoNome: "Suspense",
        sinopse: "No dia do aniversário de casamento, Nick descobre que sua esposa Amy desapareceu, e conforme a investigação avança, segredos do casamento vêm à tona.",
        classificacao: "16",
        nota: "7.9",
        capa: "https://upload.wikimedia.org/wikipedia/en/0/05/Gone_Girl_Poster.jpg",
        trailerId: "2-_-1nJf8Vg"
    },
    {
        id: 35,
        titulo: "Toy Story",
        genero: "infantil",
        generoNome: "Infantil",
        sinopse: "Um cowboy de brinquedo vê sua posição como brinquedo favorito ameaçada pela chegada de um moderno boneco astronauta, e os dois precisam aprender a trabalhar juntos.",
        classificacao: "L",
        nota: "8.3",
        capa: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
        trailerId: "7MM1k1SSlWs"
    },
    {
        id: 36,
        titulo: "Divertida Mente",
        genero: "infantil",
        generoNome: "Infantil",
        sinopse: "Dentro da mente de uma garota que muda de cidade, as emoções Alegria, Tristeza, Raiva, Medo e Nojinho disputam o controle de como ela deve reagir à nova fase da vida.",
        classificacao: "L",
        nota: "8.1",
        capa: "https://upload.wikimedia.org/wikipedia/en/0/0a/Inside_Out_%282015_film%29_poster.jpg",
        trailerId: "WIDYqBMFzfg"
    },
    {
        id: 37,
        titulo: "As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa",
        genero: "fantasia",
        generoNome: "Fantasia",
        sinopse: "Quatro irmãos descobrem um mundo mágico escondido dentro de um guarda-roupa e se veem no meio de uma batalha para libertar Nárnia do domínio eterno do inverno.",
        classificacao: "L",
        nota: "6.9",
        capa: "https://upload.wikimedia.org/wikipedia/en/1/10/The_Chronicles_of_Narnia_-_The_Lion%2C_the_Witch_and_the_Wardrobe.jpg",
        trailerId: "cNuoUKDbX_4"
    },
    {
        id: 38,
        titulo: "O Senhor dos Anéis: A Sociedade do Anel",
        genero: "fantasia",
        generoNome: "Fantasia",
        sinopse: "Um hobbit recebe a missão de destruir um anel amaldiçoado capaz de dar poder absoluto ao Senhor do Escuro, e para isso forma uma sociedade com guerreiros de diferentes povos.",
        classificacao: "12",
        nota: "8.8",
        capa: "https://upload.wikimedia.org/wikipedia/en/f/fb/Lord_Rings_Fellowship_Ring.jpg",
        trailerId: "SXpTDVcO0dI"
    },
    {
        id: 39,
        titulo: "Forrest Gump",
        genero: "drama",
        generoNome: "Drama",
        sinopse: "Um homem simples e de bom coração narra como, sem querer, participou de alguns dos momentos mais importantes da história americana ao longo de décadas.",
        classificacao: "12",
        nota: "8.8",
        capa: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
        trailerId: "E4JMfZNswzY"
    },
    {
        id: 40,
        titulo: "O Poderoso Chefão",
        genero: "drama",
        generoNome: "Drama",
        sinopse: "A saga da família Corleone mostra a transição de poder dentro de uma das mais poderosas famílias da máfia americana e o legado que ela deixa para as próximas gerações.",
        classificacao: "14",
        nota: "9.2",
        capa: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
        trailerId: "AWj8yr3wAX0"
    },
    {
        id: 41,
        titulo: "Shrek",
        genero: "animacao",
        generoNome: "Animação",
        sinopse: "Um ogro rabugento precisa resgatar uma princesa para reaver seu pântano, e acaba embarcando em uma jornada ao lado de um burro falante que não para de falar.",
        classificacao: "L",
        nota: "7.9",
        capa: "https://upload.wikimedia.org/wikipedia/en/7/7b/Shrek_%282001_animated_feature_film%29.jpg",
        trailerId: "ooJJX3R42WM"
    },
    {
        id: 42,
        titulo: "Up: Altas Aventuras",
        genero: "animacao",
        generoNome: "Animação",
        sinopse: "Um viúvo de 78 anos amarra milhares de balões em sua casa para realizar o sonho de viajar à América do Sul, e acaba levando um garoto escoteiro como companheiro de bordo sem querer.",
        classificacao: "L",
        nota: "8.2",
        capa: "https://upload.wikimedia.org/wikipedia/en/0/05/Up_%282009_film%29.jpg",
        trailerId: "qas5lWp7_R0"
    },
    {
        id: 43,
        titulo: "O Exorcista",
        genero: "terror",
        generoNome: "Terror",
        sinopse: "Uma menina começa a apresentar um comportamento cada vez mais perturbador, levando sua mãe a buscar a ajuda de dois padres para um exorcismo desesperado.",
        classificacao: "18",
        nota: "8.0",
        capa: "https://upload.wikimedia.org/wikipedia/en/7/7b/Exorcist_ver2.jpg",
        trailerId: "NIlR4QU4Kq8"
    },
    {
        id: 44,
        titulo: "Halloween: A Noite do Terror",
        genero: "terror",
        generoNome: "Terror",
        sinopse: "Anos depois de cometer um assassinato brutal na infância, Michael Myers escapa de um hospital psiquiátrico e retorna à sua cidade natal para aterrorizar uma nova geração.",
        classificacao: "16",
        nota: "7.7",
        capa: "https://upload.wikimedia.org/wikipedia/en/a/af/Halloween_%281978%29_theatrical_poster.jpg",
        trailerId: "ty6q_xbQPYA"
    },
    {
        id: 45,
        titulo: "Hereditário",
        genero: "terror",
        generoNome: "Terror",
        sinopse: "Após a morte da avó, uma família começa a descobrir segredos sombrios e assustadores escondidos em sua árvore genealógica.",
        classificacao: "16",
        nota: "7.3",
        capa: "https://upload.wikimedia.org/wikipedia/en/d/d9/Hereditary.png",
        trailerId: "51KgZg-HXZM"
    },
    {
        id: 46,
        titulo: "Vida de Pi",
        genero: "aventura",
        generoNome: "Aventura",
        sinopse: "Um jovem indiano sobrevive a um naufrágio e passa meses à deriva no oceano em um bote salva-vidas, dividindo o espaço com um tigre de bengala.",
        classificacao: "12",
        nota: "7.9",
        capa: "https://upload.wikimedia.org/wikipedia/en/5/57/Life_of_Pi_2012_Poster.jpg",
        trailerId: "Us99Ffh7Zig"
    },
    {
        id: 47,
        titulo: "A Lenda do Tesouro Perdido",
        genero: "aventura",
        generoNome: "Aventura",
        sinopse: "Um historiador amador corre contra o tempo e contra rivais perigosos para encontrar um tesouro lendário escondido com pistas deixadas pelos fundadores dos Estados Unidos.",
        classificacao: "10",
        nota: "6.9",
        capa: "https://upload.wikimedia.org/wikipedia/en/1/12/Movie_national_treasure.JPG",
        trailerId: "mcf4tXYjaxo"
    },
    {
        id: 48,
        titulo: "Jumanji: Bem-Vindo à Selva",
        genero: "aventura",
        generoNome: "Aventura",
        sinopse: "Quatro adolescentes são transportados para dentro de um jogo de videogame mágico e precisam completar a aventura para conseguir voltar para casa.",
        classificacao: "12",
        nota: "6.9",
        capa: "https://upload.wikimedia.org/wikipedia/en/d/dc/Jumanji_Welcome_to_the_Jungle.png",
        trailerId: "87VjWSar6jE"
    },
    {
        id: 49,
        titulo: "Se7en",
        genero: "suspense",
        generoNome: "Suspense",
        sinopse: "Dois detetives caçam um assassino em série que planeja seus crimes de acordo com os sete pecados capitais.",
        classificacao: "16",
        nota: "8.6",
        capa: "https://upload.wikimedia.org/wikipedia/en/6/68/Seven_%28movie%29_poster.jpg",
        trailerId: "znmZoVkCjpI"
    },
    {
        id: 50,
        titulo: "O Silêncio dos Inocentes",
        genero: "suspense",
        generoNome: "Suspense",
        sinopse: "Uma jovem agente do FBI busca a ajuda de um brilhante e perigoso psiquiatra canibal para capturar outro assassino em série.",
        classificacao: "16",
        nota: "8.6",
        capa: "https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg",
        trailerId: "VPjFs_4hVZk"
    },
    {
        id: 51,
        titulo: "Clube da Luta",
        genero: "suspense",
        generoNome: "Suspense",
        sinopse: "Um homem insone e insatisfeito com sua vida forma um clube de luta clandestino ao lado de um carismático vendedor de sabonetes, e as coisas saem do controle.",
        classificacao: "18",
        nota: "8.8",
        capa: "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg",
        trailerId: "ZWc-cLF_OyA"
    },
    {
        id: 52,
        titulo: "Procurando Nemo",
        genero: "infantil",
        generoNome: "Infantil",
        sinopse: "Depois que seu filho é capturado por um mergulhador, um peixe-palhaço superprotetor atravessa o oceano para encontrá-lo.",
        classificacao: "L",
        nota: "8.1",
        capa: "https://upload.wikimedia.org/wikipedia/en/2/29/Finding_Nemo.jpg",
        trailerId: "Xi3xJqvvJB4"
    },
    {
        id: 53,
        titulo: "Moana: Um Mar de Aventuras",
        genero: "infantil",
        generoNome: "Infantil",
        sinopse: "Uma jovem navegadora parte em uma jornada pelo oceano ao lado do semideus Maui para salvar seu povo e descobrir sua verdadeira identidade.",
        classificacao: "L",
        nota: "7.6",
        capa: "https://upload.wikimedia.org/wikipedia/en/2/26/Moana_Teaser_Poster.jpg",
        trailerId: "vdEEV2v0CwU"
    },
    {
        id: 54,
        titulo: "Zootopia: Essa Cidade é o Bicho",
        genero: "infantil",
        generoNome: "Infantil",
        sinopse: "Em uma cidade habitada só por animais, uma coelha determinada a virar policial se une a uma raposa trapaceira para resolver um misterioso caso de desaparecimentos.",
        classificacao: "L",
        nota: "8.0",
        capa: "https://upload.wikimedia.org/wikipedia/en/9/96/Zootopia_%28movie_poster%29.jpg",
        trailerId: "jWM0ct-OLsM"
    },
    {
        id: 55,
        titulo: "Harry Potter e a Câmara Secreta",
        genero: "fantasia",
        generoNome: "Fantasia",
        sinopse: "No segundo ano em Hogwarts, Harry Potter precisa descobrir quem está por trás de uma série de ataques misteriosos antes que a escola seja fechada.",
        classificacao: "L",
        nota: "7.4",
        capa: "https://upload.wikimedia.org/wikipedia/en/c/c0/Harry_Potter_and_the_Chamber_of_Secrets_movie.jpg",
        trailerId: "ubSYkFW1Jko"
    },
    {
        id: 56,
        titulo: "O Labirinto do Fauno",
        genero: "fantasia",
        generoNome: "Fantasia",
        sinopse: "Durante a Espanha franquista, uma menina descobre um labirinto mágico e precisa cumprir três tarefas perigosas para provar que é uma princesa de um reino subterrâneo.",
        classificacao: "16",
        nota: "8.2",
        capa: "https://upload.wikimedia.org/wikipedia/en/6/67/Pan%27s_Labyrinth.jpg",
        trailerId: "oOQV8gg9b5o"
    },
    {
        id: 57,
        titulo: "Edward Mãos de Tesoura",
        genero: "fantasia",
        generoNome: "Fantasia",
        sinopse: "Um homem criado por um inventor, com lâminas no lugar das mãos, tenta se adaptar à vida em uma tranquila cidade suburbana depois de ser adotado por uma família.",
        classificacao: "12",
        nota: "7.9",
        capa: "https://upload.wikimedia.org/wikipedia/en/3/3b/Edwardscissorhandsposter.JPG",
        trailerId: "9khnM5-SUGE"
    },
    {
        id: 58,
        titulo: "Um Sonho de Liberdade",
        genero: "drama",
        generoNome: "Drama",
        sinopse: "Um banqueiro condenado injustamente por assassinato constrói uma amizade duradoura dentro da prisão enquanto planeja algo que ninguém espera.",
        classificacao: "16",
        nota: "9.3",
        capa: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
        trailerId: "P9mwtI82k6E"
    },
    {
        id: 59,
        titulo: "A Lista de Schindler",
        genero: "drama",
        generoNome: "Drama",
        sinopse: "Um empresário alemão salva a vida de mais de mil refugiados judeus durante o Holocausto, empregando-os em suas fábricas.",
        classificacao: "16",
        nota: "9.0",
        capa: "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg",
        trailerId: "i2YEWjmYU74"
    },
    {
        id: 60,
        titulo: "Green Book: O Guia",
        genero: "drama",
        generoNome: "Drama",
        sinopse: "Um motorista ítalo-americano é contratado para dirigir e proteger um talentoso pianista negro em uma turnê pelo sul dos Estados Unidos nos anos 1960.",
        classificacao: "12",
        nota: "8.2",
        capa: "https://upload.wikimedia.org/wikipedia/en/5/5b/Green_Book_%282018_poster%29.png",
        trailerId: "NVpchILn3UI"
    },
    {
        id: 61,
        titulo: "Como Treinar o Seu Dragão",
        genero: "animacao",
        generoNome: "Animação",
        sinopse: "Um jovem viking desafia as tradições de seu povo ao fazer amizade com um dragão ferido, em vez de caçá-lo como todos os outros guerreiros.",
        classificacao: "L",
        nota: "8.1",
        capa: "https://upload.wikimedia.org/wikipedia/en/9/99/How_to_Train_Your_Dragon_Poster.jpg",
        trailerId: "2AKsAxrhqgM"
    },
    {
        id: 62,
        titulo: "Viva: A Vida é uma Festa",
        genero: "animacao",
        generoNome: "Animação",
        sinopse: "Um menino apaixonado por música é transportado para a Terra dos Mortos e precisa encontrar seu tatataravô, um lendário músico, para poder voltar para sua família.",
        classificacao: "L",
        nota: "8.4",
        capa: "https://upload.wikimedia.org/wikipedia/en/9/98/Coco_%282017_film%29_poster.jpg",
        trailerId: "jluHyP7kkkw"
    },
    {
        id: 63,
        titulo: "Wall-E",
        genero: "animacao",
        generoNome: "Animação",
        sinopse: "Um robô solitário encarregado de limpar uma Terra abandonada encontra um propósito novo quando uma sonda robótica chega em busca de sinais de vida.",
        classificacao: "L",
        nota: "8.4",
        capa: "https://upload.wikimedia.org/wikipedia/en/4/4c/WALL-E_poster.jpg",
        trailerId: "9pyBKj5-jVk"
    },
    {
        id: 64,
        titulo: "Curtindo a Vida Adoidado",
        genero: "comedia",
        generoNome: "Comédia",
        sinopse: "Um estudante carismático decide matar aula pela última vez antes de se formar, e arrasta os amigos para um dia inesquecível pela cidade.",
        classificacao: "12",
        nota: "7.8",
        capa: "https://upload.wikimedia.org/wikipedia/en/9/9b/Ferris_Bueller%27s_Day_Off.jpg",
        trailerId: "D6gABQFR94U"
    },
    {
        id: 65,
        titulo: "Superbad: É Hoje!",
        genero: "comedia",
        generoNome: "Comédia",
        sinopse: "Dois amigos inseparáveis tentam comprar bebida para uma festa antes de se formarem e seguirem caminhos separados na faculdade.",
        classificacao: "16",
        nota: "7.6",
        capa: "https://upload.wikimedia.org/wikipedia/en/8/8b/Superbad_Poster.png",
        trailerId: "4eaZ_48ZYog"
    },
    {
        id: 66,
        titulo: "De Volta para o Futuro",
        genero: "ficcao",
        generoNome: "Ficção Científica",
        sinopse: "Um adolescente é acidentalmente enviado trinta anos ao passado em um carro modificado por um cientista excêntrico, e precisa garantir que seus pais se apaixonem para poder existir no futuro.",
        classificacao: "L",
        nota: "8.5",
        capa: "https://upload.wikimedia.org/wikipedia/en/d/d2/Back_to_the_Future.jpg",
        trailerId: "Wqx7YEjR4II"
    }
];

// Ícone e cores de fallback exibidos enquanto o pôster real carrega (ou se falhar)
const POSTER_FALLBACK = {
    pop: { icone: "🎬", corA: "#3a0d10", corB: "#0c0c12" },
    ficcao: { icone: "🚀", corA: "#0d1f3a", corB: "#05070c" },
    vidareal: { icone: "🎭", corA: "#3a2a0d", corB: "#0c0c12" },
    romance: { icone: "💕", corA: "#3a0d2a", corB: "#0c0c12" },
    comedia: { icone: "😂", corA: "#0d3a1f", corB: "#0c0c12" },
    anime: { icone: "🍥", corA: "#3a1a0d", corB: "#0c0c12" },
    terror: { icone: "💀", corA: "#1a0d0d", corB: "#000000" },
    aventura: { icone: "🧭", corA: "#1a2a0d", corB: "#0c0c12" },
    suspense: { icone: "🕵️", corA: "#0d0d1a", corB: "#000000" },
    infantil: { icone: "🧸", corA: "#1a0d2a", corB: "#0c0c12" },
    fantasia: { icone: "🧙", corA: "#0d2a1a", corB: "#0c0c12" },
    drama: { icone: "🎭", corA: "#2a0d1a", corB: "#0c0c12" },
    animacao: { icone: "🎨", corA: "#2a1a0d", corB: "#0c0c12" }
};

// SVG padrão de fallback para impedir imagem quebrada
const PLACEHOLDER_IMG = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='500' height='750' viewBox='0 0 500 750'><rect width='100%' height='100%' fill='%231f2937'/><text x='50%' y='50%' font-family='sans-serif' font-size='30' fill='%239ca3af' text-anchor='middle'>🎬 Sem Imagem</text></svg>";

let favoritos = JSON.parse(localStorage.getItem("popcorn_favs")) || [];
let vistos = JSON.parse(localStorage.getItem("popcorn_watched")) || [];
let likes = JSON.parse(localStorage.getItem("popcorn_likes")) || [];
let dislikes = JSON.parse(localStorage.getItem("popcorn_dislikes")) || [];

let generoAtual = "all";
let filmeAtual = null;

let movieGrid, favoritesGrid, emptyFavorites, searchInput, modal, modalTitle, modalSynopsis, modalRating, modalAge, trailer, favoriteBtn, watchedBtn, likeBtn, dislikeBtn;

function carregarElementosDOM() {
    movieGrid = document.getElementById("movie-grid");
    favoritesGrid = document.getElementById("favorites-grid");
    emptyFavorites = document.getElementById("empty-favorites");
    searchInput = document.getElementById("movie-search");
    modal = document.getElementById("movie-modal");
    modalTitle = document.getElementById("modal-title");
    modalSynopsis = document.getElementById("modal-synopsis");
    modalRating = document.getElementById("modal-rating");
    modalAge = document.getElementById("modal-age-rating");
    trailer = document.getElementById("movie-trailer");
    favoriteBtn = document.getElementById("favorite-btn");
    watchedBtn = document.getElementById("watched-btn");
    likeBtn = document.getElementById("like-btn");
    dislikeBtn = document.getElementById("dislike-btn");
}

function salvarDados() {
    localStorage.setItem("popcorn_favs", JSON.stringify(favoritos));
    localStorage.setItem("popcorn_watched", JSON.stringify(vistos));
    localStorage.setItem("popcorn_likes", JSON.stringify(likes));
    localStorage.setItem("popcorn_dislikes", JSON.stringify(dislikes));
}

function criarCard(filme) {
    const card = document.createElement("article");
    const favorito = favoritos.includes(filme.id);
    const visto = vistos.includes(filme.id);

    card.className = "movie-card";
    card.dataset.id = filme.id;

    const fallback = POSTER_FALLBACK[filme.genero] || POSTER_FALLBACK.pop;

    card.innerHTML = `
        <div class="movie-poster">
            <div class="poster-art" style="--poster-a:${fallback.corA};--poster-b:${fallback.corB};">
                <span class="poster-icon">${fallback.icone}</span>
                <span class="poster-title">${filme.titulo}</span>
                <span class="poster-caption">${filme.generoNome}</span>
            </div>
            <img src="${filme.capa}" alt="Poster de ${filme.titulo}" loading="lazy" onload="this.classList.add('loaded');" onerror="this.onerror=null;this.src='${PLACEHOLDER_IMG}';this.classList.add('loaded');">
            <span class="age-badge age-${filme.classificacao}">${filme.classificacao}</span>
            ${visto ? `<span class="watched-badge">✓ Visto</span>` : ""}
            <div class="movie-overlay">
                <span class="movie-genre">${filme.generoNome}</span>
                <button type="button" class="card-favorite ${favorito ? "active" : ""}" data-favorite="${filme.id}" aria-label="Favoritar" aria-pressed="${favorito}">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                </button>
                <button type="button" class="details-btn" data-details="${filme.id}">▶ Ver detalhes</button>
            </div>
        </div>
        <div class="movie-card-content">
            <h3>${filme.titulo}</h3>
            <div class="movie-card-meta">
                <span class="movie-rating">⭐ ${filme.nota}</span>
                <span>${filme.generoNome}</span>
            </div>
        </div>
    `;

    return card;
}

// Exibe o filme marcado como "destaque" (ex.: o mais recente lançamento premiado) em um banner especial
// Esteira com os filmes marcados como "destaque" (ex.: os mais premiados/aclamados),
// rolando continuamente para a esquerda. A lista é duplicada para o loop ficar contínuo.
function renderizarDestaque() {
    const secao = document.getElementById("destaque-section");
    const trilha = document.getElementById("destaque-trilha");
    if (!secao || !trilha) return;

    const destaques = filmes.filter(filme => filme.destaque);
    if (destaques.length === 0) return;

    const cartaoHTML = (filme) => `
        <button type="button" class="destaque-card" data-details="${filme.id}">
            <img src="${filme.capa}" alt="Pôster de ${filme.titulo}" loading="lazy" onerror="this.onerror=null;this.src='${PLACEHOLDER_IMG}';">
            <div class="destaque-card-info">
                <strong>${filme.titulo}</strong>
                <span>⭐ ${filme.nota} · ${filme.generoNome}</span>
            </div>
        </button>
    `;

    trilha.innerHTML = destaques.map(cartaoHTML).join("") + destaques.map(cartaoHTML).join("");
    secao.hidden = false;
}

function renderizarFilmes(lista) {
    if (!movieGrid) return;
    movieGrid.innerHTML = "";

    if (lista.length === 0) {
        movieGrid.innerHTML = `<p class="empty-message">🎬 Nenhum filme encontrado.</p>`;
        return;
    }

    lista.forEach(filme => movieGrid.appendChild(criarCard(filme)));
}

function renderizarFavoritos() {
    if (!favoritesGrid) return;
    favoritesGrid.innerHTML = "";

    const lista = filmes.filter(filme => favoritos.includes(filme.id));

    if (lista.length === 0) {
        if (emptyFavorites) emptyFavorites.style.display = "block";
        return;
    }

    if (emptyFavorites) emptyFavorites.style.display = "none";
    lista.forEach(filme => favoritesGrid.appendChild(criarCard(filme)));
}

function atualizarCatalogo() {
    const termo = searchInput ? searchInput.value.trim().toLowerCase() : "";

    const resultado = filmes.filter(filme => {
        const generoOK = generoAtual === "all" || filme.genero === generoAtual;
        const buscaOK = filme.titulo.toLowerCase().includes(termo) || filme.generoNome.toLowerCase().includes(termo);
        return generoOK && buscaOK;
    });

    renderizarFilmes(resultado);
}

function abrirModal(id) {
    const filme = filmes.find(item => item.id === Number(id));
    if (!filme || !modal) return;

    filmeAtual = filme;

    if (modalTitle) modalTitle.textContent = filme.titulo;
    if (modalSynopsis) modalSynopsis.textContent = filme.sinopse;
    if (modalRating) modalRating.textContent = `⭐ ${filme.nota}`;
    if (modalAge) modalAge.textContent = `Classificação: ${filme.classificacao}`;
    if (trailer) trailer.src = `https://www.youtube.com/embed/${filme.trailerId}?autoplay=1&rel=0`;

    atualizarBotoes();

    // Reinicia a seleção de sessão para o filme recém-aberto e gera assentos próprios dele
    diaAtual = "02/09/2026";
    document.querySelectorAll(".btn-dia").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.data === diaAtual);
    });
    carregarHorarios(diaAtual);

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function fecharModal() {
    if (!modal) return;
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (trailer) trailer.src = "";
    filmeAtual = null;
}

function atualizarBotoes() {
    if (!filmeAtual) return;
    const id = filmeAtual.id;

    if (favoriteBtn) {
        const ativo = favoritos.includes(id);
        favoriteBtn.classList.toggle("active", ativo);
        favoriteBtn.setAttribute("aria-pressed", ativo);
    }
    if (watchedBtn) {
        const ativo = vistos.includes(id);
        watchedBtn.classList.toggle("active", ativo);
        watchedBtn.setAttribute("aria-pressed", ativo);
    }
    if (likeBtn) likeBtn.classList.toggle("active", likes.includes(id));
    if (dislikeBtn) dislikeBtn.classList.toggle("active", dislikes.includes(id));
}

function alternarFavorito(id) {
    const targetId = id ? Number(id) : (filmeAtual ? filmeAtual.id : null);
    if (!targetId) return;

    favoritos = favoritos.includes(targetId) ? favoritos.filter(item => item !== targetId) : [...favoritos, targetId];
    salvarDados();
    atualizarCatalogo();
    renderizarFavoritos();
    atualizarBotoes();
}

function alternarVisto() {
    if (!filmeAtual) return;
    const id = filmeAtual.id;
    vistos = vistos.includes(id) ? vistos.filter(item => item !== id) : [...vistos, id];
    salvarDados();
    atualizarCatalogo();
    renderizarFavoritos();
    atualizarBotoes();
}

function alternarLike() {
    if (!filmeAtual) return;
    const id = filmeAtual.id;
    dislikes = dislikes.filter(item => item !== id);
    likes = likes.includes(id) ? likes.filter(item => item !== id) : [...likes, id];
    salvarDados();
    atualizarBotoes();
}

function alternarDislike() {
    if (!filmeAtual) return;
    const id = filmeAtual.id;
    likes = likes.filter(item => item !== id);
    dislikes = dislikes.includes(id) ? dislikes.filter(item => item !== id) : [...dislikes, id];
    salvarDados();
    atualizarBotoes();
}

function alternarContraste() {
    const ativo = document.body.classList.toggle("high-contrast");
    const btn = document.getElementById("btn-contraste");
    if (btn) btn.setAttribute("aria-pressed", ativo);
    localStorage.setItem("popcorn_contraste", ativo ? "1" : "0");
}

document.addEventListener("click", function (e) {
    const btnDet = e.target.closest("[data-details]");
    if (btnDet) {
        abrirModal(btnDet.dataset.details);
        return;
    }

    const btnFav = e.target.closest("[data-favorite]");
    if (btnFav) {
        alternarFavorito(btnFav.dataset.favorite);
        return;
    }

    const btnGenre = e.target.closest(".genre-btn");
    if (btnGenre) {
        document.querySelectorAll(".genre-btn").forEach(btn => btn.classList.remove("active"));
        btnGenre.classList.add("active");
        generoAtual = btnGenre.dataset.genre;
        atualizarCatalogo();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    carregarElementosDOM();
    if (searchInput) {
        searchInput.addEventListener("input", atualizarCatalogo);
    }

    const btnContraste = document.getElementById("btn-contraste");
    if (btnContraste) {
        btnContraste.addEventListener("click", alternarContraste);
        if (localStorage.getItem("popcorn_contraste") === "1") {
            document.body.classList.add("high-contrast");
            btnContraste.setAttribute("aria-pressed", "true");
        }
    }

    if (favoriteBtn) favoriteBtn.addEventListener("click", () => alternarFavorito());
    if (watchedBtn) watchedBtn.addEventListener("click", alternarVisto);
    if (likeBtn) likeBtn.addEventListener("click", alternarLike);
    if (dislikeBtn) dislikeBtn.addEventListener("click", alternarDislike);

    atualizarCatalogo();
    renderizarFavoritos();
    renderizarDestaque();
});

// Preço fixo por ingresso
const PRECO_INGRESSO = 25.00;
let assentosSelecionados = 0;

// Sessões reais programadas para Setembro de 2026
const sessoesSetembro = {
    "02/09/2026": ["13:00", "15:45", "18:30", "21:15"],
    "05/09/2026": ["14:00", "16:30", "19:00", "21:30", "23:45"],
    "10/09/2026": ["13:30", "16:00", "18:30", "21:00"],
    "15/09/2026": ["14:15", "17:00", "19:45"],
    "20/09/2026": ["11:00", "13:30", "16:00", "18:30", "21:00"],
    "25/09/2026": ["15:00", "17:45", "20:30", "23:15"]
};

let diaAtual = "02/09/2026";
let horaAtual = "13:00";

// Carrega horários conforme o dia selecionado
function carregarHorarios(dia) {
    const container = document.getElementById('horarios-container');
    container.innerHTML = '';
    
    const horarios = sessoesSetembro[dia] || [];
    
    horarios.forEach((hora, index) => {
        const btn = document.createElement('button');
        btn.classList.add('btn-horario');
        if (index === 0) {
            btn.classList.add('active');
            horaAtual = hora;
        }
        btn.innerText = hora;
        
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.btn-horario').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            horaAtual = hora;
            atualizarTextoSessao();
            carregarAssentos();
        });
        
        container.appendChild(btn);
    });

    atualizarTextoSessao();
    carregarAssentos();
}

// Gerador pseudo-aleatório com semente fixa: mesmo filme/sessão sempre
// mostra o mesmo mapa de ocupação, mas cada filme fica diferente dos outros.
function criarGeradorComSemente(semente) {
    let s = semente % 2147483647;
    if (s <= 0) s += 2147483646;
    return function () {
        s = (s * 16807) % 2147483647;
        return (s - 1) / 2147483646;
    };
}

// Gera o mapa de assentos no estilo cinema real: fileiras com letra (A, B, C...)
// e colunas numeradas (1, 2, 3...), então cada poltrona tem um código tipo "C4".
// A ocupação varia de acordo com o filme e a sessão escolhida.
function carregarAssentos(totalAssentos = 32, colunas = 8) {
    const grid = document.getElementById('assentos-grid');
    grid.innerHTML = '';
    grid.classList.add('assentos-mapa');
    assentosSelecionados = 0;
    atualizarResumo();

    const diaNumero = Number(diaAtual.replace(/\D/g, '')) || 0;
    const horaNumero = Number(horaAtual.replace(':', '')) || 0;
    const semente = filmeAtual ? (filmeAtual.id * 977) + diaNumero + horaNumero : 12345;
    const aleatorio = criarGeradorComSemente(semente);

    const totalLinhas = Math.ceil(totalAssentos / colunas);

    // Cabeçalho com os números das colunas
    const cabecalho = document.createElement('div');
    cabecalho.className = 'assentos-linha assentos-cabecalho';
    cabecalho.innerHTML = '<span class="assento-letra"></span>' +
        Array.from({ length: colunas }, (_, coluna) => `<span class="assento-numero-coluna">${coluna + 1}</span>`).join('');
    grid.appendChild(cabecalho);

    for (let linha = 0; linha < totalLinhas; linha++) {
        const letraLinha = String.fromCharCode(65 + linha); // A, B, C, D...
        const linhaEl = document.createElement('div');
        linhaEl.className = 'assentos-linha';

        const rotulo = document.createElement('span');
        rotulo.className = 'assento-letra';
        rotulo.textContent = letraLinha;
        linhaEl.appendChild(rotulo);

        for (let coluna = 1; coluna <= colunas; coluna++) {
            const numeroGlobal = (linha * colunas) + coluna;
            if (numeroGlobal > totalAssentos) break;

            const codigo = `${letraLinha}${coluna}`;
            const assento = document.createElement('div');
            assento.classList.add('assento');
            assento.dataset.codigo = codigo;
            assento.title = `Assento ${codigo}`;
            assento.setAttribute('role', 'button');
            assento.setAttribute('aria-label', `Assento ${codigo}`);

            // Cerca de 35% dos assentos já ocupados, variando por filme/sessão
            if (aleatorio() < 0.35) {
                assento.classList.add('ocupado');
            }

            assento.addEventListener('click', () => {
                if (!assento.classList.contains('ocupado')) {
                    assento.classList.toggle('selecionado');

                    if (assento.classList.contains('selecionado')) {
                        assentosSelecionados++;
                    } else {
                        assentosSelecionados--;
                    }

                    atualizarResumo();
                }
            });

            linhaEl.appendChild(assento);
        }

        grid.appendChild(linhaEl);
    }
}

// Atualiza o resumo do pedido e preço
function atualizarResumo() {
    document.getElementById('assentos-qtd').innerText = assentosSelecionados;
    const total = (assentosSelecionados * PRECO_INGRESSO).toFixed(2);
    document.getElementById('preco-total').innerText = total.replace('.', ',');
    
    const btnConfirmar = document.getElementById('btn-confirmar');
    btnConfirmar.disabled = assentosSelecionados === 0;
}

function atualizarTextoSessao() {
    document.getElementById('sessao-selecionada-texto').innerText = `${diaAtual} às ${horaAtual}`;
}

// Eventos dos botões de data
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn-dia').forEach(botao => {
        botao.addEventListener('click', (e) => {
            document.querySelectorAll('.btn-dia').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            diaAtual = e.target.getAttribute('data-data');
            carregarHorarios(diaAtual);
        });
    });

    // Inicialização da primeira sessão
    carregarHorarios(diaAtual);
});

// Ação ao clicar em "Comprar": fecha o modal de sessão e abre o bilhete de confirmação
function confirmarReserva() {
    if (assentosSelecionados === 0) return;

    const totalTexto = document.getElementById('preco-total').innerText;
    const sessaoTexto = `${diaAtual} às ${horaAtual}`;

    abrirSucessoModal(sessaoTexto, assentosSelecionados, totalTexto);
    registrarCompra(filmeAtual, sessaoTexto, assentosSelecionados, totalTexto);
    fecharModal();
}

function abrirSucessoModal(sessaoTexto, qtdAssentos, totalTexto) {
    const sucessoModal = document.getElementById('sucesso-modal');
    if (!sucessoModal) return;

    document.getElementById('sucesso-mensagem-sessao').textContent =
        `${filmeAtual ? filmeAtual.titulo + ' — ' : ''}Sessão: ${sessaoTexto}`;
    document.getElementById('sucesso-mensagem-assentos').textContent =
        `Assentos comprados: ${qtdAssentos}`;
    document.getElementById('sucesso-mensagem-total').textContent = `R$ ${totalTexto}`;

    sucessoModal.classList.add('active');
}

function fecharSucessoModal() {
    const sucessoModal = document.getElementById('sucesso-modal');
    if (!sucessoModal) return;
    sucessoModal.classList.remove('active');
}

// Badge "Assento comprado" perto do botão "Explorar filmes", com histórico salvo no navegador
// para poder mostrar uma prévia de quais filmes foram comprados.
function registrarCompra(filme, sessaoTexto, quantidade, totalTexto) {
    const historico = JSON.parse(localStorage.getItem('popcorn_compras_historico')) || [];

    historico.unshift({
        filmeId: filme ? filme.id : null,
        titulo: filme ? filme.titulo : 'Filme',
        capa: filme ? filme.capa : '',
        sessao: sessaoTexto,
        qtd: quantidade,
        total: totalTexto
    });

    const historicoLimitado = historico.slice(0, 20);
    localStorage.setItem('popcorn_compras_historico', JSON.stringify(historicoLimitado));

    const totalAssentos = historicoLimitado.reduce((soma, item) => soma + item.qtd, 0);
    mostrarBadgeCompra(totalAssentos);
    renderizarPreviewCompras(historicoLimitado);
}

function mostrarBadgeCompra(total) {
    const badge = document.getElementById('compra-badge');
    const texto = document.getElementById('compra-badge-texto');
    if (!badge || !texto) return;

    texto.textContent = total === 1 ? 'Assento comprado!' : `${total} assentos comprados!`;
    badge.hidden = false;

    badge.classList.remove('compra-badge-pop');
    void badge.offsetWidth; // reinicia a animação a cada nova compra
    badge.classList.add('compra-badge-pop');
}

// Prévia (dropdown) com os filmes cujos ingressos já foram comprados
function renderizarPreviewCompras(historico) {
    const lista = document.getElementById('compra-preview-lista');
    if (!lista) return;

    if (!historico || historico.length === 0) {
        lista.innerHTML = `<li class="compra-preview-vazio">Nenhum ingresso comprado ainda.</li>`;
        return;
    }

    lista.innerHTML = historico.map(item => `
        <li class="compra-preview-item">
            <img class="compra-preview-poster" src="${item.capa || PLACEHOLDER_IMG}" alt="" loading="lazy" onerror="this.onerror=null;this.src='${PLACEHOLDER_IMG}';">
            <div class="compra-preview-info">
                <strong>${item.titulo}</strong>
                <span>${item.sessao} · ${item.qtd} assento${item.qtd > 1 ? 's' : ''}</span>
                <span>R$ ${item.total}</span>
            </div>
        </li>
    `).join('');
}

function fecharPreviewCompras() {
    const badge = document.getElementById('compra-badge');
    const preview = document.getElementById('compra-preview');
    if (!preview || preview.hidden) return;
    preview.hidden = true;
    if (badge) badge.setAttribute('aria-expanded', 'false');
}

// O painel usa position:fixed (para não ser cortado pelo overflow:hidden do
// hero-banner), então a posição precisa ser calculada em JS a partir do botão.
function alternarPreviewCompras() {
    const badge = document.getElementById('compra-badge');
    const preview = document.getElementById('compra-preview');
    if (!badge || !preview) return;

    if (!preview.hidden) {
        fecharPreviewCompras();
        return;
    }

    const rect = badge.getBoundingClientRect();
    preview.hidden = false;
    badge.setAttribute('aria-expanded', 'true');

    const larguraPreview = preview.offsetWidth || 300;
    const limiteDireito = window.innerWidth - 16;
    const left = Math.max(16, Math.min(rect.left, limiteDireito - larguraPreview));

    preview.style.top = `${rect.bottom + 10}px`;
    preview.style.left = `${left}px`;
}

document.addEventListener('DOMContentLoaded', () => {
    const historico = JSON.parse(localStorage.getItem('popcorn_compras_historico')) || [];
    const totalSalvo = historico.reduce((soma, item) => soma + item.qtd, 0);

    if (totalSalvo > 0) mostrarBadgeCompra(totalSalvo);
    renderizarPreviewCompras(historico);

    const badge = document.getElementById('compra-badge');
    if (badge) badge.addEventListener('click', alternarPreviewCompras);

    document.addEventListener('click', (e) => {
        const wrapper = document.querySelector('.compra-wrapper');
        if (!wrapper || wrapper.contains(e.target)) return;
        fecharPreviewCompras();
    });

    // Fecha o painel se a página rolar, já que ele não acompanha o botão em position:fixed
    window.addEventListener('scroll', fecharPreviewCompras, { passive: true });
    window.addEventListener('resize', fecharPreviewCompras);
});
