// The 12 steps of the puja sequence, in order.
// Images are expected at /images/puja-1.jpg ... /images/puja-12.jpg (public/images).
const rawPujas = [
  {
    hindi: 'संकल्प',
    name: 'Sankalp',
    description:
      'The start of every puja. You state your name, gotra, place and purpose, and take a vow before Maa.',
  },
  {
    hindi: 'गौरी गणेश पूजन',
    name: 'Gauri Ganesh Pujan',
    description:
      'Worship of Gauri and Ganesh ji first, so that the puja begins without obstacles.',
  },
  {
    hindi: 'स्थापित सर्व मंडल पूजन',
    name: 'Sthapit Sarva Mandal Pujan',
    description:
      'Worship of all the deities invited and installed on the mandal for the ceremony.',
  },
  {
    hindi: 'बगलामुखी पूजन',
    name: 'Baglamukhi Pujan',
    description:
      'Main worship of Maa Baglamukhi with yellow flowers, turmeric, haldi-kumkum and naivedya.',
  },
  {
    hindi: 'बगलामुखी अभिषेक',
    name: 'Baglamukhi Abhishek',
    description:
      'Ritual bathing of the deity with sacred materials, along with the mantras.',
  },
  {
    hindi: 'बगलामुखी अर्चन',
    name: 'Baglamukhi Archan',
    description:
      'Offering of flowers and names of Maa Baglamukhi one by one, with mantra.',
  },
  {
    hindi: 'बगलामुखी आवरण',
    name: 'Baglamukhi Avaran',
    description:
      'Worship of the attendant deities who surround Maa on the yantra.',
  },
  {
    hindi: 'बगलामुखी पाठ',
    name: 'Baglamukhi Path',
    description:
      'Recitation of the Baglamukhi stotra and kavach by the pandit.',
  },
  {
    hindi: 'बगलामुखी महा विशेष अनुष्ठान',
    name: 'Baglamukhi Maha Vishesh Anushthan',
    description:
      'The complete, extended anushthan with jaap and all ritual steps done in full.',
  },
  {
    hindi: 'बगलामुखी औषधि महा विशेष हवन',
    name: 'Baglamukhi Aushadhi Maha Vishesh Havan',
    description:
      'A grand havan using herbal materials (aushadhi) as offerings in the fire.',
  },
  {
    hindi: 'दुर्गा सप्तशती नव चंडी पाठ',
    name: 'Durga Saptashati Nav Chandi Path',
    description:
      'Nine recitations of the Durga Saptashati, followed by havan.',
  },
  {
    hindi: 'दुर्गा सप्तशती सत चंडी पाठ',
    name: 'Durga Saptashati Sat Chandi Path',
    description:
      'One hundred recitations of the Durga Saptashati by a team of pandits.',
  },
];

export const pujas = rawPujas.map((puja, index) => ({
  ...puja,
  id: index + 1,
  image: `/images/puja-${index + 1}.jpg`,
}));
