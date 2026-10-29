const rawPujas = [
  {
    hindi: 'संकल्प',
    name: 'Sankalp',
    slug: 'sankalp',
    shortDesc: 'The start of every puja. You state your name, gotra, place and purpose, and take a vow before Maa.',
    description: 'Sankalp is the formal vow taken at the beginning of every Vedic ritual. It involves stating your name, gotra, location, and the specific purpose (reason) for the Puja. This connects you spiritually to the ritual and ensures the ceremony is performed in your name.',
    benefits: 'It ensures the spiritual merits of the ritual are transferred directly to you and sets a strong, clear intention for the ceremony.',
    whoIsItFor: 'Every devotee who is booking a Puja. It is the mandatory first step to ensure the Puja is dedicated specifically to you and your family.',
    includes: 'Sankalp Vidhi with your name, gotra, and specific problem/desire.',
    duration: '15 - 30 minutes'
  },
  {
    hindi: 'गौरी गणेश पूजन',
    name: 'Gauri Ganesh Pujan',
    slug: 'gauri-ganesh-pujan',
    shortDesc: 'Worship of Gauri and Ganesh ji first, so that the puja begins without obstacles.',
    description: 'Before any major Havan or Anushthan, Lord Ganesha and Goddess Gauri are worshipped. Ganesha removes all obstacles, and Gauri brings prosperity and auspiciousness to the ritual.',
    benefits: 'Clears negative energy, removes hurdles in the upcoming ritual, and brings peace and harmony to the devotee\'s life.',
    whoIsItFor: 'Devotees starting a new venture, facing continuous obstacles in life, or seeking peace and prosperity in the family.',
    includes: 'Ganesh and Gauri idols, yellow flowers, fresh fruits, Panchamrit, and Vedic mantras.',
    duration: '30 - 45 minutes'
  },
  {
    hindi: 'स्थापित सर्व मंडल पूजन',
    name: 'Sthapit Sarva Mandal Pujan',
    slug: 'sthapit-sarva-mandal-pujan',
    shortDesc: 'Worship of all the deities invited and installed on the mandal for the ceremony.',
    description: 'A sacred ritual where all the deities presiding over the mandal (sacred space) are invoked and worshipped to create a highly divine and charged atmosphere for the main ceremony.',
    benefits: 'Brings the collective blessings of all the deities to the ceremony, ensuring maximum spiritual benefit.',
    whoIsItFor: 'Devotees performing large Havans or Anushthans who want to invite the full divine presence for maximum spiritual benefit.',
    includes: 'Mandal establishment, Kalash Sthapana, invocation of all Vedic deities.',
    duration: '45 - 60 minutes'
  },
  {
    hindi: 'बगलामुखी पूजन',
    name: 'Baglamukhi Pujan',
    slug: 'baglamukhi-pujan',
    shortDesc: 'Main worship of Maa Baglamukhi with yellow flowers, turmeric, haldi-kumkum and naivedya.',
    description: 'The primary worship of Maa Baglamukhi using her favorite items, especially yellow flowers and turmeric. Devotees pray to the Goddess for protection and victory over obstacles.',
    benefits: 'Provides protection from enemies, removes negativity, and helps overcome legal and financial troubles.',
    whoIsItFor: 'Devotees facing court cases, legal disputes, hidden enemies, or severe financial blockages.',
    includes: 'Haldi-kumkum, yellow flowers, yellow sweets, Baglamukhi Yantra worship.',
    duration: '1 - 2 hours'
  },
  {
    hindi: 'बगलामुखी अभिषेक',
    name: 'Baglamukhi Abhishek',
    slug: 'baglamukhi-abhishek',
    shortDesc: 'Ritual bathing of the deity with sacred materials, along with the mantras.',
    description: 'The ceremonial bathing of the divine idol with Panchamrit (milk, honey, ghee, sugar, curd) and pure water, while chanting powerful Vedic mantras.',
    benefits: 'Purifies the mind and soul, brings peace, and invites the divine grace of Maa Baglamukhi into your life.',
    whoIsItFor: 'Devotees seeking mental peace, relief from health issues, and purification from negative energies.',
    includes: 'Panchamrit Abhishek, Gangajal, fresh flowers, and specific Baglamukhi mantras.',
    duration: '45 minutes - 1 hour'
  },
  {
    hindi: 'बगलामुखी अर्चन',
    name: 'Baglamukhi Archan',
    slug: 'baglamukhi-archan',
    shortDesc: 'Offering of flowers and names of Maa Baglamukhi one by one, with mantra.',
    description: 'A deeply devotional practice where 108 or 1008 names of the Goddess are chanted while offering flowers to the deity.',
    benefits: 'Brings immense peace, fulfills specific desires, and fosters a deep spiritual connection with the Goddess.',
    whoIsItFor: 'Devotees wanting to fulfill specific material or spiritual wishes and strengthen their connection with Maa.',
    includes: '108/1008 names of Maa Baglamukhi, fresh flower offerings, and devotional chanting.',
    duration: '30 - 45 minutes'
  },
  {
    hindi: 'बगलामुखी आवरण',
    name: 'Baglamukhi Avaran',
    slug: 'baglamukhi-avaran',
    shortDesc: 'Worship of the attendant deities who surround Maa on the yantra.',
    description: 'A ritual dedicated to the protective forces and attendant deities (Avaran Devatas) that surround Maa Baglamukhi\'s Yantra, forming a shield of divine energy.',
    benefits: 'Creates a powerful spiritual shield (Raksha Kavach) around the devotee, protecting them from hidden enemies and negative energies.',
    whoIsItFor: 'Anyone feeling constantly attacked by negative energies, experiencing bad luck, or needing a strong spiritual shield.',
    includes: 'Avaran devata mantras, Raksha Kavach setup, and protective Yantra worship.',
    duration: '1 - 1.5 hours'
  },
  {
    hindi: 'बगलामुखी पाठ',
    name: 'Baglamukhi Path',
    slug: 'baglamukhi-path',
    shortDesc: 'Recitation of the Baglamukhi stotra and kavach by the pandit.',
    description: 'The continuous recitation of the powerful Baglamukhi Stotra and Kavach by learned pandits to invoke the Goddess\'s protective energy.',
    benefits: 'Removes fear, destroys negative thoughts, and provides immense mental strength and courage.',
    whoIsItFor: 'Devotees suffering from anxiety, fear, depression, or those seeking mental strength and clarity.',
    includes: 'Baglamukhi Stotra Path, Kavach Path, and Vedic pandits.',
    duration: '1 - 2 hours'
  },
  {
    hindi: 'बगलामुखी महा विशेष अनुष्ठान',
    name: 'Baglamukhi Maha Vishesh Anushthan',
    slug: 'baglamukhi-maha-vishesh-anushthan',
    shortDesc: 'The complete, extended anushthan with jaap and all ritual steps done in full.',
    description: 'An elaborate, multi-day spiritual practice involving intense chanting (Jaap), Havan, and complete Vedic procedures dedicated to Maa Baglamukhi.',
    benefits: 'Highly effective for overcoming severe life obstacles, chronic problems, and achieving major life goals.',
    whoIsItFor: 'Devotees facing extreme situations like severe legal battles, massive business losses, or long-standing family disputes.',
    includes: 'Multi-day Jaap, Purnahuti Havan, and complete Vedic protocol.',
    duration: 'Multiple Days'
  },
  {
    hindi: 'बगलामुखी औषधि महा विशेष हवन',
    name: 'Baglamukhi Aushadhi Maha Vishesh Havan',
    slug: 'baglamukhi-aushadhi-maha-vishesh-havan',
    shortDesc: 'A grand havan using herbal materials (aushadhi) as offerings in the fire.',
    description: 'A special Havan where specific sacred herbs and medicinal plants (Aushadhi) are offered into the fire along with Vedic mantras.',
    benefits: 'Promotes physical and mental healing, removes diseases, and purifies the environment.',
    whoIsItFor: 'Devotees or their family members suffering from chronic illnesses or seeking spiritual healing.',
    includes: 'Rare Ayurvedic herbs, specific Havan samagri, and healing mantras.',
    duration: '2 - 3 hours'
  },
  {
    hindi: 'दुर्गा सप्तशती नव चंडी पाठ',
    name: 'Durga Saptashati Nav Chandi Path',
    slug: 'durga-saptashati-nav-chandi-path',
    shortDesc: 'Nine recitations of the Durga Saptashati, followed by havan.',
    description: 'A powerful ritual involving the recitation of the 700 verses of Durga Saptashati nine times, culminating in a sacred Havan.',
    benefits: 'Destroys negativity, removes fear, and brings immense prosperity, protection, and success.',
    whoIsItFor: 'Devotees wanting to remove deep-seated negativity, seeking victory in life, and inviting prosperity.',
    includes: 'Nav Chandi Path by a team of pandits, followed by a grand Havan.',
    duration: 'Full Day Event'
  },
  {
    hindi: 'दुर्गा सप्तशती सत चंडी पाठ',
    name: 'Durga Saptashati Sat Chandi Path',
    slug: 'durga-saptashati-sat-chandi-path',
    shortDesc: 'One hundred recitations of the Durga Saptashati by a team of pandits.',
    description: 'A massive, highly auspicious ritual where a team of pandits collectively recites the Durga Saptashati one hundred times.',
    benefits: 'Brings ultimate protection, fulfills the most difficult wishes, and creates an incredibly powerful spiritual atmosphere.',
    whoIsItFor: 'For extreme cases, massive wish fulfillment, or when all other remedies have failed.',
    includes: 'Sat Chandi Path performed by a large team of Vedic pandits over multiple days.',
    duration: 'Multi-Day Event'
  },
];

export const pujas = rawPujas.map((puja, index) => ({
  ...puja,
  id: index + 1,
  image: `/images/puja-${index + 1}.jpg`,
}));
