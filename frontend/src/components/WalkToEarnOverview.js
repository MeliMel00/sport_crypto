import React from 'react';
import { motion } from 'framer-motion';
import { Footprints, Wallet, Shield, Trophy, ChevronDown } from 'lucide-react';

const WalkToEarnOverview = () => {
  const sections = [
    {
      id: 'concept',
      icon: <Footprints className="w-12 h-12 text-blue-400" />,
      textColor:'text-blue-400',
      title: 'Concept du Projet',
      color: 'bg-white/10',
      content: (
        <motion.div 
          className="space-y-6" 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white/90">Transformez Vos Pas en Opportunité</h3>
          <p className="text-white/80 text-lg leading-relaxed">
            Notre plateforme révolutionne le fitness en créant un écosystème décentralisé où l'activité physique se traduit directement par des récompenses financières. En exploitant la technologie blockchain, nous comblons le fossé entre la santé, la technologie et les incitations économiques.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
            <h4 className="text-xl font-semibold text-blue-300 mb-4">Vision Principale</h4>
            <p className="text-white/70">
              Motiver la condition physique mondiale en créant un système transparent et gratifiant où chaque pas contribue à la santé personnelle et à la croissance financière.
            </p>
          </div>
        </motion.div>
      )
    },
    {
      id: 'tokenomics',
      icon: <Wallet className="w-12 h-12 text-green-400" />,
      textColor:'text-green-400',
      title: 'Tokenomics',
      color: 'bg-white/10',
      content: (
        <motion.div 
          className="space-y-6" 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white/90">Conception de l'Économie des Tokens</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Génération de Tokens',
                description: "Gagnez 1 token par 1 000 pas vérifiés, créant une corrélation directe entre l'activité physique et les récompenses."
              },
              {
                title: 'Type de Token',
                description: 'Tokens fongibles ERC-20, assurant une compatibilité avec les principaux écosystèmes blockchain.'
              },
              {
                title: 'Préservation de la Valeur',
                description: 'Mettre en place des mécanismes de burn de tokens pour maintenir et potentiellement augmenter la valeur des tokens au fil du temps.'
              }
            ].map((item, index) => (
              <div 
                key={item.title} 
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
              >
                <h4 className="text-xl font-semibold text-green-300 mb-4">{item.title}</h4>
                <p className="text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
            <h4 className="text-xl font-semibold text-green-300 mb-4">Utilité des Tokens</h4>
            <ul className="space-y-3 text-white/70">
              {[
                'Échanger contre des NFTs exclusifs et des récompenses partenaires',
                'Accéder à des fonctionnalités premium de la plateforme',
                'Participer à la gouvernance de l’écosystème'
              ].map((utility, index) => (
                <li key={index} className="flex items-center">
                  <ChevronDown className="mr-2 text-green-400" size={20} />
                  {utility}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )
    },
    {
      id: 'integration',
      icon: <Shield className="w-12 h-12 text-indigo-500" />,
      textColor:'text-indigo-500',
      title: 'Intégration des Données de Fitness',
      color: 'bg-white/10',
      content: (
        <motion.div 
          className="space-y-6" 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white/90">Suivi de Fitness Transparent</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <h4 className="text-xl font-semibold text-indigo-500 mb-4">Plateformes Supportées</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-lg text-white/80  mb-2">Appareils Portables</h5>
                  <ul className="text-white/70 space-y-2">
                    {["Fitbit", "Apple Watch", "Garmin"].map((device) => (
                      <li key={device}>{device}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-lg text-white/80 mb-2">Applications Mobiles</h5>
                  <ul className="text-white/70 space-y-2">
                    {["Google Fit", "Apple HealthKit", "Samsung Health"].map((app) => (
                      <li key={app}>{app}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <h4 className="text-xl font-semibold text-indigo-500 mb-4">Mécanismes Anti-Triche</h4>
              <ul className="space-y-3 text-white/70">
                {[
                  'Validation multi-source des données',
                  'Protocoles d\'authentification des appareils',
                  'Vérification par preuve d\'activité'
                ].map((mechanism, index) => (
                  <li key={index} className="flex items-center">
                    <ChevronDown className="mr-2 text-purple-400" size={20} />
                    {mechanism}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )
    },
    {
      id: 'nft',
      icon: <Trophy className="w-12 h-12 text-yellow-400" />,
      title: 'Stratégie NFT',
      textColor:'text-yellow-400',
      color: 'bg-white/10',
      content: (
        <motion.div 
          className="space-y-6" 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white/90">Écosystème NFT Exclusif</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <h4 className="text-xl font-semibold text-yellow-300 mb-4">NFTs Pré-Lancement</h4>
              <ul className="space-y-3 text-white/70">
                {[
                  'NFTs en niveaux : Argent, Or, Platine',
                  'Récompenses exclusives pour les premiers supporters',
                  'Incentives pour les contributeurs de financement participatif'
                ].map((nft, index) => (
                  <li key={index} className="flex items-center">
                    <ChevronDown className="mr-2 text-yellow-400" size={20} />
                    {nft}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <h4 className="text-xl font-semibold text-yellow-300 mb-4">Utilités des NFTs</h4>
              <ul className="space-y-3 text-white/70">
                {[
                  'Taux d\'accumulation de tokens accéléré',
                  'Accès exclusif à du contenu sur la plateforme',
                  'Privilèges d\'accès anticipé aux fonctionnalités'
                ].map((utility, index) => (
                  <li key={index} className="flex items-center">
                    <ChevronDown className="mr-2 text-yellow-400" size={20} />
                    {utility}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )
    }
  ];

  const handleJoin = () => {
    alert('Salle d\'attente rejointe avec succès !');
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#131861] to-[#8a36c2] relative z-10 overflow-hidden">

<section className="flex flex-col">
  <div
    className="min-h-screen flex-col relative flex items-center justify-center bg-cover bg-center"
    style={{ backgroundImage: 'url(/bg-main.jpg)' }}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left Side */}
      <motion.div
        className="text-white space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-[#ff40b6] to-[#4d56d6] bg-clip-text text-transparent sm:text-5xl">
            Walk-to-Earn : La Révolution Web3 du Fitness
          </h1>
        <p className="text-lg text-white/70 leading-relaxed">
          Découvrez comment notre solution transforme le fitness en un écosystème gratifiant et décentralisé.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Convertissez vos pas en tokens.</li>
          <li>Accédez à des récompenses exclusives.</li>
          <li>Intégration avec vos appareils préférés.</li>
        </ul>
        <button onClick={handleJoin} className="cursor-pointer bg-gradient-to-r from-[#ff40b6] to-[#4d56d6] text-white px-8 py-3 rounded-full text-lg hover:opacity-90 transition-all">
          Rejoindre la Liste d'Attente
        </button>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="https://bafybeiht42rdj7iurza5j72koodolporuybdlztf34steksqxidkivp75a.ipfs.w3s.link/_d0eae06b-9d07-4411-b441-750688593570.jpg"
          alt="Produit"
          className="w-96 rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
      {/* Scroll Mouse Indicator */}
    <div className="flex justify-center absolute bottom-5 items-center mt-12">
      <div className="animate-bounce cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
    
  </div>


</section>

      {/* SVG Animations */}
      <svg className="absolute -z-10 top-0 left-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#4d56d6" fillOpacity="0.7" d="M0,160L80,181.3C160,203,320,245,480,224C640,203,800,117,960,112C1120,107,1280,181,1360,218.7L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
       

        {sections.map((section) => (
          <motion.div 
            key={section.id} 
            className={`rounded-lg ${section.color} p-8 mb-12`} 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-4 mb-4">
              {section.icon}
              <h2 className={`text-3xl font-bold ${section.textColor}`}>{section.title}</h2>
            </div>
            {section.content}
          </motion.div>
        ))}

        {/* Product Display */}
       
      </div>
    </div>
  );
};

export default WalkToEarnOverview;
