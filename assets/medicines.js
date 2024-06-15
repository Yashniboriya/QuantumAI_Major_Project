const mockMedicines = [
  {
    name: "Aspirin",
    description:
      "Aspirin is commonly used to relieve pain, reduce inflammation, and lower fever. It is typically used to treat headaches, muscle aches, toothaches, and common cold symptoms.",
    usage:
      "Take with food or a full glass of water to prevent stomach upset. Avoid alcohol while taking aspirin.",
    dosage:
      "Dosage: 325-650 mg every 4-6 hours as needed for pain or fever. Do not exceed 4 grams (4000 mg) per day.",
  },
  {
    name: "Paracetamol (Acetaminophen)",
    description:
      "Paracetamol, also known as acetaminophen, is a commonly used medication to treat pain and fever. It is often used for headaches, muscle aches, backaches, toothaches, and cold symptoms.",
    usage:
      "Take with a full glass of water. Avoid alcohol while taking paracetamol.",
    dosage:
      "Dosage: 500-1000 mg every 4-6 hours as needed for pain or fever. Do not exceed 4000 mg per day for adults.",
  },
  {
    name: "Ibuprofen",
    description:
      "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain, reduce inflammation, and lower fever. It is commonly used for headaches, muscle aches, toothaches, menstrual cramps, and arthritis.",
    usage:
      "Take with food or milk to prevent stomach upset. Avoid lying down for at least 10 minutes after taking ibuprofen.",
    dosage:
      "Dosage: 200-400 mg every 4-6 hours as needed for pain or fever. Do not exceed 1200 mg per day without doctor's advice.",
  },
  {
    name: "Naproxen",
    description:
      "Naproxen is a nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain, reduce inflammation, and lower fever. It is commonly used for arthritis, menstrual cramps, headaches, muscle aches, and toothaches.",
    usage:
      "Take with food or milk to prevent stomach upset. Avoid lying down for at least 10 minutes after taking naproxen.",
    dosage:
      "Dosage: 220-550 mg every 8-12 hours as needed for pain or fever. Do not exceed 1650 mg per day without doctor's advice.",
  },
  {
    name: "Omeprazole",
    description:
      "Omeprazole is a proton pump inhibitor (PPI) used to treat conditions where your stomach makes too much acid. It is used to treat symptoms of gastroesophageal reflux disease (GERD) and other conditions caused by excess stomach acid.",
    usage:
      "Take omeprazole by mouth before eating, usually once daily or as directed by your doctor. Swallow the capsule whole. Do not crush, chew, or open the capsule.",
    dosage:
      "Dosage: 20-40 mg once daily for adults. Consult a doctor for appropriate dosage in children and for specific conditions.",
  },
  {
    name: "Simvastatin",
    description:
      "Simvastatin is a statin medication used to lower cholesterol and triglycerides in the blood. It works by reducing the production of cholesterol in the liver.",
    usage:
      "Take simvastatin by mouth in the evening, with or without food, as directed by your doctor. Swallow the tablet whole. Do not crush, chew, or break it.",
    dosage:
      "Dosage: The usual starting dose is 10-20 mg once daily in the evening for adults. Your doctor may adjust your dose as needed.",
  },
  {
    name: "Metformin",
    description:
      "Metformin is an oral diabetes medicine that helps control blood sugar levels. It is used together with diet and exercise to improve blood sugar control in adults with type 2 diabetes mellitus.",
    usage:
      "Take metformin by mouth with meals as directed by your doctor, usually 1-3 times daily. Swallow the tablet whole with a full glass of water.",
    dosage:
      "Dosage: The usual starting dose is 500 mg twice daily or 850 mg once daily with meals for adults. Your doctor may gradually increase your dose to control blood sugar levels.",
  },
  {
    name: "Atorvastatin",
    description:
      "Atorvastatin is a statin medication used to lower cholesterol levels and reduce the risk of heart attack, stroke, and other heart complications in people with coronary heart disease, or at risk of heart disease.",
    usage:
      "Take atorvastatin by mouth with or without food, usually once daily in the evening, or as directed by your doctor. Swallow the tablet whole. Do not crush, chew, or break it.",
    dosage:
      "Dosage: The usual starting dose is 10-20 mg once daily for adults. Your doctor may adjust your dose based on your cholesterol levels and response to treatment.",
  },
  {
    name: "Amlodipine",
    description:
      "Amlodipine is a calcium channel blocker used to treat high blood pressure (hypertension) and chest pain (angina). It works by relaxing blood vessels, allowing blood to flow more easily and reducing the workload on the heart.",
    usage:
      "Take amlodipine by mouth with or without food, usually once daily as directed by your doctor. Swallow the tablet whole. Do not crush or chew it.",
    dosage:
      "Dosage: The usual starting dose is 5 mg once daily for adults. Your doctor may adjust your dose based on your blood pressure response.",
  },
  {
    name: "Losartan",
    description:
      "Losartan is an angiotensin II receptor blocker (ARB) used to treat high blood pressure (hypertension) and to lower the risk of stroke in certain people with heart disease.",
    usage:
      "Take losartan by mouth with or without food, usually once or twice daily as directed by your doctor. Swallow the tablet whole. Do not crush, chew, or break it.",
    dosage:
      "Dosage: The usual starting dose is 50 mg once daily for adults. Your doctor may adjust your dose based on your blood pressure response.",
  },
  {
    name: "Metoprolol",
    description:
      "Metoprolol is a beta-blocker used to treat high blood pressure (hypertension), chest pain (angina), and to improve survival after a heart attack. It works by blocking the action of certain natural chemicals in the body, such as epinephrine, on the heart and blood vessels.",
    usage:
      "Take metoprolol by mouth with or without food, usually once or twice daily as directed by your doctor. Swallow the tablet whole. Do not crush, chew, or break it.",
    dosage:
      "Dosage: The usual starting dose is 25-100 mg once or twice daily for adults. Your doctor may adjust your dose based on your blood pressure and heart rate.",
  },
  {
    name: "Levothyroxine",
    description:
      "Levothyroxine is a thyroid hormone used to treat an underactive thyroid gland (hypothyroidism). It replaces or provides more thyroid hormone, which is normally produced by the thyroid gland.",
    usage:
      "Take levothyroxine by mouth on an empty stomach, at least 30 minutes to 1 hour before breakfast, or as directed by your doctor. Swallow the tablet whole with a full glass of water.",
    dosage:
      "Dosage: The usual starting dose is 25-50 mcg once daily for adults. Your doctor may adjust your dose based on your thyroid hormone levels.",
  },
  {
    name: "Metoprolol",
    description:
      "Metoprolol is a beta-blocker medication used to treat high blood pressure, chest pain (angina), heart failure, and to improve survival after a heart attack. It works by blocking the action of certain natural chemicals in the body, such as adrenaline, on the heart and blood vessels.",
    usage:
      "Take metoprolol by mouth with or without food, usually once or twice daily as directed by your doctor. Swallow the tablet whole. Do not crush, chew, or break it.",
    dosage:
      "Dosage: The usual starting dose is 25-100 mg once or twice daily for adults. Your doctor may adjust your dose based on your blood pressure, heart rate, and medical condition.",
  },
  {
    name: "Lisinopril",
    description:
      "Lisinopril is an angiotensin-converting enzyme (ACE) inhibitor used to treat high blood pressure, heart failure, and to improve survival after a heart attack. It works by relaxing blood vessels, allowing blood to flow more easily and reducing the workload on the heart.",
    usage:
      "Take lisinopril by mouth with or without food, usually once daily as directed by your doctor. Swallow the tablet whole. Do not crush, chew, or break it.",
    dosage:
      "Dosage: The usual starting dose is 10-20 mg once daily for adults. Your doctor may adjust your dose based on your blood pressure and kidney function.",
  },
  {
    name: "Warfarin",
    description:
      "Warfarin is an anticoagulant medication used to prevent blood clots from forming or growing larger in your blood vessels. It is commonly prescribed to treat or prevent blood clots in conditions such as deep vein thrombosis (DVT) and pulmonary embolism (PE), and to reduce the risk of stroke in people with atrial fibrillation.",
    usage:
      "Take warfarin by mouth with or without food as directed by your doctor. Follow the dosing schedule carefully and take the medication at the same time each day. Your dosage is based on your medical condition, response to treatment, and other medications you may be taking.",
    dosage:
      "Dosage: The usual starting dose is determined by your doctor based on your individual factors such as your condition and response to treatment. Regular monitoring of blood clotting time (INR) is required to adjust the dose as needed.",
  },
  {
    name: "Metformin",
    description:
      "Metformin is an oral diabetes medication that helps control blood sugar levels. It is used together with diet and exercise to improve blood sugar control in adults with type 2 diabetes mellitus. Metformin works by decreasing glucose production in the liver and improving insulin sensitivity in the body.",
    usage:
      "Take metformin by mouth with meals as directed by your doctor, usually 1-3 times daily. Swallow the tablet whole with a full glass of water.",
    dosage:
      "Dosage: The usual starting dose is 500 mg twice daily or 850 mg once daily with meals for adults. Your doctor may gradually increase your dose to control blood sugar levels.",
  },
  {
    name: "Ciprofloxacin",
    description:
      "Ciprofloxacin is an antibiotic used to treat a variety of bacterial infections, including urinary tract infections, respiratory tract infections, skin infections, and bone/joint infections. It works by stopping the growth of bacteria.",
    usage:
      "Take ciprofloxacin by mouth with or without food, usually twice a day or as directed by your doctor. Swallow the tablet whole. Do not crush, chew, or break it.",
    dosage:
      "Dosage: The dosage and duration of treatment depend on your medical condition and response to treatment. Follow your doctor's instructions carefully.",
  },
  {
    name: "Azithromycin",
    description:
      "Azithromycin is an antibiotic used to treat a wide variety of bacterial infections, including respiratory tract infections, skin infections, ear infections, and sexually transmitted infections. It works by stopping the growth of bacteria.",
    usage:
      "Take azithromycin by mouth with or without food, usually once daily or as directed by your doctor. Swallow the tablet whole. Do not crush, chew, or break it.",
    dosage:
      "Dosage: The dosage and duration of treatment depend on your medical condition and response to treatment. Follow your doctor's instructions carefully.",
  },
  {
    name: "Amoxicillin",
    description:
      "Amoxicillin is an antibiotic used to treat a wide variety of bacterial infections, including respiratory tract infections, ear infections, skin infections, and urinary tract infections. It works by stopping the growth of bacteria.",
    usage:
      "Take amoxicillin by mouth with or without food, usually every 8 or 12 hours as directed by your doctor. Swallow the capsule whole with a full glass of water.",
    dosage:
      "Dosage: The dosage and duration of treatment depend on your medical condition and response to treatment. Follow your doctor's instructions carefully.",
  },
  {
    name: "Cephalexin",
    description:
      "Cephalexin is an antibiotic used to treat a wide variety of bacterial infections, including respiratory tract infections, skin infections, ear infections, and urinary tract infections. It works by stopping the growth of bacteria.",
    usage:
      "Take cephalexin by mouth with or without food, usually every 6 or 12 hours as directed by your doctor. Swallow the capsule whole with a full glass of water.",
    dosage:
      "Dosage: The dosage and duration of treatment depend on your medical condition and response to treatment. Follow your doctor's instructions carefully.",
  },
  // Add more medicine entries as needed
  {
    name: "Prednisone",
    description:
      "Prednisone is a corticosteroid medication used to treat a variety of conditions, including inflammation, allergic reactions, asthma, arthritis, skin conditions, and certain types of cancer. It works by reducing inflammation and suppressing the immune system.",
    usage:
      "Take prednisone by mouth with food or milk as directed by your doctor. Swallow the tablet whole. Do not crush, chew, or break it.",
    dosage:
      "Dosage: The dosage and duration of treatment depend on your medical condition and response to treatment. Follow your doctor's instructions carefully.",
  },
  {
    name: "Albuterol",
    description:
      "Albuterol is a bronchodilator medication used to treat asthma, chronic obstructive pulmonary disease (COPD), and other breathing problems. It works by relaxing the muscles in the airways, making it easier to breathe.",
    usage:
      "Use albuterol inhalation solution or nebulizer solution as directed by your doctor. Follow the instructions provided with your medication. Do not swallow or inject the solution.",
    dosage:
      "Dosage: The dosage and frequency of use depend on your medical condition and response to treatment. Follow your doctor's instructions carefully.",
  },
  {
    name: "Fluoxetine",
    description:
      "Fluoxetine is a selective serotonin reuptake inhibitor (SSRI) antidepressant medication used to treat depression, obsessive-compulsive disorder (OCD), bulimia nervosa, panic disorder, and premenstrual dysphoric disorder (PMDD). It works by increasing the levels of serotonin, a neurotransmitter in the brain that helps regulate mood.",
    usage:
      "Take fluoxetine by mouth with or without food as directed by your doctor. Swallow the capsule whole. Do not crush, chew, or break it.",
    dosage:
      "Dosage: The usual starting dose is 20 mg once daily in the morning for adults. Your doctor may adjust your dose based on your response to treatment.",
  },
  {
    name: "Sertraline",
    description:
      "Sertraline is a selective serotonin reuptake inhibitor (SSRI) antidepressant medication used to treat depression, obsessive-compulsive disorder (OCD), panic disorder, post-traumatic stress disorder (PTSD), social anxiety disorder, and premenstrual dysphoric disorder (PMDD). It works by increasing the levels of serotonin, a neurotransmitter in the brain that helps regulate mood.",
    usage:
      "Take sertraline by mouth with or without food as directed by your doctor. Swallow the tablet whole. Do not crush, chew, or break it.",
    dosage:
      "Dosage: The usual starting dose is 50 mg once daily for adults. Your doctor may adjust your dose based on your response to treatment.",
  },
  {
    name: "Calcium Carbonate",
    description:
      "Calcium carbonate is a mineral supplement used to prevent or treat low blood calcium levels in people who do not get enough calcium from their diets. It is essential for maintaining healthy bones and teeth.",
    usage:
      "Take calcium carbonate by mouth with food or as directed by your doctor. Swallow the tablet whole with a full glass of water. Do not crush or chew the tablets unless directed.",
    dosage:
      "Dosage: The dosage depends on your age, gender, and specific medical condition. Follow your doctor's instructions carefully.",
  },
  {
    name: "Vitamin D3",
    description:
      "Vitamin D3 is a fat-soluble vitamin that helps your body absorb calcium and phosphorus. It is essential for maintaining strong bones and teeth, and it also plays a role in immune function, muscle function, and cell growth.",
    usage:
      "Take vitamin D3 by mouth with or without food as directed by your doctor. Swallow the tablet whole with a full glass of water.",
    dosage:
      "Dosage: The dosage depends on your age, gender, and specific medical condition. Follow your doctor's instructions carefully.",
  },
  {
    name: "Alendronate",
    description:
      "Alendronate is a bisphosphonate medication used to treat osteoporosis in postmenopausal women and men. It works by slowing down the breakdown of bone and increasing bone density.",
    usage:
      "Take alendronate by mouth on an empty stomach in the morning, at least 30 minutes before food, beverages, or other medications. Swallow the tablet whole with a full glass of water. Do not lie down or recline for at least 30 minutes after taking alendronate.",
    dosage:
      "Dosage: The usual dosage is 70 mg once weekly or 10 mg once daily for osteoporosis. Follow your doctor's instructions carefully.",
  },
  {
    name: "Risedronate",
    description:
      "Risedronate is a bisphosphonate medication used to treat osteoporosis in postmenopausal women and men. It works by slowing down the breakdown of bone and increasing bone density.",
    usage:
      "Take risedronate by mouth in the morning, at least 30 minutes before food, beverages, or other medications. Swallow the tablet whole with a full glass of water. Do not lie down or recline for at least 30 minutes after taking risedronate.",
    dosage:
      "Dosage: The usual dosage is 35 mg once weekly or 5 mg once daily for osteoporosis. Follow your doctor's instructions carefully.",
  },
  {
    name: "Ibandronate",
    description:
      "Ibandronate is a bisphosphonate medication used to treat osteoporosis in postmenopausal women. It works by slowing down the breakdown of bone and increasing bone density.",
    usage:
      "Take ibandronate by mouth on an empty stomach, at least 60 minutes before food, beverages, or other medications. Swallow the tablet whole with a full glass of water. Do not lie down or recline for at least 60 minutes after taking ibandronate.",
    dosage:
      "Dosage: The usual dosage is 150 mg once monthly or 2.5 mg once daily for osteoporosis. Follow your doctor's instructions carefully.",
  },
  {
    name: "Teriparatide",
    description:
      "Teriparatide is a synthetic form of parathyroid hormone used to treat osteoporosis in men and postmenopausal women who are at high risk of fractures. It works by stimulating new bone formation.",
    usage:
      "Inject teriparatide subcutaneously (under the skin) once daily at the same time each day. Your healthcare provider will teach you how to properly administer the injection.",
    dosage:
      "Dosage: The usual dosage is 20 mcg once daily for up to 24 months. Follow your doctor's instructions carefully.",
  },
  {
    name: "Denosumab",
    description:
      "Denosumab is a monoclonal antibody medication used to treat osteoporosis in postmenopausal women and men at high risk of fractures. It works by inhibiting the activity of cells that break down bone.",
    usage:
      "Administer denosumab as a subcutaneous injection (under the skin) once every 6 months. Your healthcare provider will administer the injection for you.",
    dosage:
      "Dosage: The usual dosage is 60 mg once every 6 months. Follow your doctor's instructions carefully.",
  },
  {
    name: "Calcitonin",
    description:
      "Calcitonin is a hormone medication used to treat osteoporosis in postmenopausal women and to relieve bone pain associated with fractures. It works by inhibiting the activity of cells that break down bone.",
    usage:
      "Administer calcitonin as a nasal spray or injection as directed by your doctor. Follow the instructions provided with your medication.",
    dosage:
      "Dosage: The usual dosage varies depending on the formulation and indication. Follow your doctor's instructions carefully.",
  },
  {
    name: "Heparin",
    description:
      "Heparin is an anticoagulant medication used to prevent and treat blood clots in the veins, arteries, or lungs. It works by interfering with the formation of blood clots.",
    usage:
      "Heparin is typically administered as an injection under the skin (subcutaneously) or into a vein (intravenously). Dosage and administration depend on the specific condition being treated and the patient's medical history.",
    dosage:
      "Dosage: The dosage of heparin is determined based on the patient's weight, medical condition, and response to treatment. It is usually given multiple times per day.",
  },
  {
    name: "Warfarin",
    description:
      "Warfarin is an anticoagulant medication used to prevent and treat blood clots in the veins, arteries, or lungs. It works by interfering with the formation of blood clots by blocking the action of vitamin K.",
    usage:
      "Warfarin is taken orally as directed by a healthcare provider. Dosage and frequency vary depending on the patient's individual response to treatment and the target international normalized ratio (INR). Regular monitoring of INR levels is necessary.",
    dosage:
      "Dosage: The dosage of warfarin is determined based on the patient's individual factors, including their target INR range and any other medications they may be taking.",
  },
  {
    name: "Rivaroxaban",
    description:
      "Rivaroxaban is an anticoagulant medication used to prevent and treat blood clots in the veins, arteries, or lungs. It works by inhibiting the activity of factor Xa, a key component in the blood clotting process.",
    usage:
      "Rivaroxaban is taken orally with or without food, as directed by a healthcare provider. Dosage and frequency vary depending on the specific condition being treated and the patient's medical history.",
    dosage:
      "Dosage: The dosage of rivaroxaban is determined based on the patient's individual factors, including their medical condition, kidney function, and other medications they may be taking.",
  },
  {
    name: "Compression Stockings",
    description:
      "Compression stockings are specialized garments worn on the legs to help improve circulation and reduce swelling and discomfort associated with varicose veins and other venous disorders. They work by applying graduated pressure to the legs, with the highest pressure at the ankle and decreasing pressure as it moves up the leg.",
    usage:
      "Compression stockings should be worn during the day, and they can be removed at night. They should be put on first thing in the morning before getting out of bed.",
    dosage:
      "Dosage: The level of compression and length of time for wearing compression stockings depend on the severity of venous insufficiency and should be determined by a healthcare professional.",
  },
  {
    name: "Apixaban",
    description:
      "Apixaban is an anticoagulant medication used to prevent and treat blood clots in veins, arteries, or lungs. It works by inhibiting the activity of factor Xa, a key component in the blood clotting process.",
    usage:
      "Take apixaban by mouth with or without food as directed by your doctor. Swallow the tablet whole with a full glass of water.",
    dosage:
      "Dosage: The dosage depends on your medical condition and the specific indication for which you are being treated. Follow your doctor's instructions carefully.",
  },
  {
    name: "Dabigatran",
    description:
      "Dabigatran is an anticoagulant medication used to prevent and treat blood clots in veins, arteries, or lungs. It works by inhibiting the activity of thrombin, an enzyme involved in the blood clotting process.",
    usage:
      "Take dabigatran by mouth with or without food as directed by your doctor. Swallow the capsule whole with a full glass of water.",
    dosage:
      "Dosage: The dosage depends on your medical condition and the specific indication for which you are being treated. Follow your doctor's instructions carefully.",
  },
  {
    name: "Dalteparin",
    description:
      "Dalteparin is an anticoagulant medication used to prevent and treat blood clots in veins, arteries, or lungs. It works by increasing the activity of antithrombin III, a natural substance in the body that helps prevent blood clot formation.",
    usage:
      "Dalteparin is typically given as an injection under the skin by a healthcare professional. Follow your doctor's instructions carefully.",
    dosage:
      "Dosage: The dosage and duration of treatment depend on your medical condition, weight, and response to treatment. Follow your doctor's instructions carefully.",
  },
  {
    name: "Tinzaparin",
    description:
      "Tinzaparin is an anticoagulant medication used to prevent and treat blood clots in veins, arteries, or lungs. It works by increasing the activity of antithrombin III, a natural substance in the body that helps prevent blood clot formation.",
    usage:
      "Tinzaparin is typically given as an injection under the skin by a healthcare professional. Follow your doctor's instructions carefully.",
    dosage:
      "Dosage: The dosage and duration of treatment depend on your medical condition, weight, and response to treatment. Follow your doctor's instructions carefully.",
  },
  // Add more medicine entries related to vein health as needed
  {
    name: "Acetaminophen",
    description:
      "Acetaminophen, also known as paracetamol, is a commonly used medication to relieve pain and reduce fever. It is often used for headaches, migraines, toothaches, and muscle aches.",
    usage:
      "Take acetaminophen by mouth with a full glass of water. Follow the dosage instructions provided on the label or as directed by your doctor.",
    dosage:
      "Dosage: The recommended dosage depends on your age, weight, and medical condition. Do not exceed the maximum daily dose. Consult your doctor for appropriate dosage.",
  },
  {
    name: "Ibuprofen",
    description:
      "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain, reduce inflammation, and lower fever. It is often used for headaches, migraines, toothaches, and muscle aches.",
    usage:
      "Take ibuprofen by mouth with food or a full glass of water. Follow the dosage instructions provided on the label or as directed by your doctor.",
    dosage:
      "Dosage: The recommended dosage depends on your age, weight, and medical condition. Do not exceed the maximum daily dose. Consult your doctor for appropriate dosage.",
  },
  {
    name: "Sumatriptan",
    description:
      "Sumatriptan is a medication used to treat migraine headaches. It works by narrowing blood vessels around the brain and reducing substances in the body that can trigger headache pain, nausea, sensitivity to light and sound, and other migraine symptoms.",
    usage:
      "Take sumatriptan by mouth as soon as migraine symptoms appear, or as directed by your doctor. Follow the dosage instructions provided on the label.",
    dosage:
      "Dosage: The recommended dosage depends on your medical condition and response to treatment. Do not exceed the maximum daily dose. Consult your doctor for appropriate dosage.",
  },
  {
    name: "Ergotamine",
    description:
      "Ergotamine is a medication used to treat migraine headaches. It works by narrowing blood vessels in the brain and blocking the release of certain natural substances that cause migraine symptoms.",
    usage:
      "Take ergotamine by mouth with food or milk at the first sign of a migraine attack, or as directed by your doctor. Follow the dosage instructions provided on the label.",
    dosage:
      "Dosage: The recommended dosage depends on your medical condition and response to treatment. Do not exceed the maximum daily dose. Consult your doctor for appropriate dosage.",
  },
  {
    name: "Topiramate",
    description:
      "Topiramate is a medication used to prevent seizures in people with epilepsy and to prevent migraine headaches. It works by affecting chemicals in the brain that are involved in seizures and migraine pain.",
    usage:
      "Take topiramate by mouth with or without food as directed by your doctor. Swallow the tablet whole with a full glass of water.",
    dosage:
      "Dosage: The recommended dosage depends on your medical condition, age, and response to treatment. Your doctor will start you on a low dose and gradually increase it to minimize side effects.",
  },
  {
    name: "Naproxen",
    description:
      "Naproxen is a nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain, reduce inflammation, and lower fever. It is often used for headaches, migraines, toothaches, and menstrual cramps.",
    usage:
      "Take naproxen by mouth with food or a full glass of water. Follow the dosage instructions provided on the label or as directed by your doctor.",
    dosage:
      "Dosage: The recommended dosage depends on your age, weight, and medical condition. Do not exceed the maximum daily dose. Consult your doctor for appropriate dosage.",
  },
  {
    name: "Divalproex",
    description:
      "Divalproex is a medication used to treat epilepsy, bipolar disorder, and prevent migraine headaches. It works by increasing the levels of gamma-aminobutyric acid (GABA), a neurotransmitter that inhibits brain activity.",
    usage:
      "Take divalproex by mouth with or without food as directed by your doctor. Swallow the tablet whole with a full glass of water.",
    dosage:
      "Dosage: The recommended dosage depends on your medical condition, age, and response to treatment. Your doctor will start you on a low dose and gradually increase it to minimize side effects.",
  },
  {
    name: "Propranolol",
    description:
      "Propranolol is a beta-blocker medication used to treat high blood pressure, chest pain (angina), tremors, and prevent migraine headaches. It works by blocking the action of certain natural chemicals in the body, such as adrenaline, on the heart and blood vessels.",
    usage:
      "Take propranolol by mouth with or without food as directed by your doctor. Swallow the tablet whole with a full glass of water.",
    dosage:
      "Dosage: The recommended dosage depends on your medical condition and response to treatment. Your doctor will start you on a low dose and gradually increase it to minimize side effects.",
  },
  {
    name: "Amitriptyline",
    description:
      "Amitriptyline is a tricyclic antidepressant medication used to treat depression, neuropathic pain, and prevent migraine headaches. It works by increasing the levels of certain neurotransmitters in the brain, such as serotonin and norepinephrine.",
    usage:
      "Take amitriptyline by mouth with or without food as directed by your doctor. Swallow the tablet whole with a full glass of water.",
    dosage:
      "Dosage: The recommended dosage depends on your medical condition, age, and response to treatment. Your doctor will start you on a low dose and gradually increase it to minimize side effects.",
  },
  {
    name: "Gabapentin",
    description:
      "Gabapentin is an anticonvulsant medication used to treat seizures, neuropathic pain, and prevent migraine headaches. It works by affecting certain neurotransmitters in the brain involved in seizures and pain perception.",
    usage:
      "Take gabapentin by mouth with or without food as directed by your doctor. Swallow the tablet whole with a full glass of water.",
    dosage:
      "Dosage: The recommended dosage depends on your medical condition, kidney function, and response to treatment. Your doctor will start you on a low dose and gradually increase it to minimize side effects.",
  },
  {
    name: "Pizotifen",
    description:
      "Pizotifen is a medication used to prevent migraine headaches. It works by blocking the action of serotonin and histamine in the brain, which are involved in migraine attacks.",
    usage:
      "Take pizotifen by mouth with or without food as directed by your doctor. Swallow the tablet whole with a full glass of water.",
    dosage:
      "Dosage: The recommended dosage depends on your medical condition and response to treatment. Your doctor may start you on a low dose and gradually increase it to minimize side effects.",
  },
  {
    name: "Valproic Acid",
    description:
      "Valproic acid is a medication used to treat epilepsy, bipolar disorder, and prevent migraine headaches. It works by increasing the levels of gamma-aminobutyric acid (GABA), a neurotransmitter that inhibits brain activity.",
    usage:
      "Take valproic acid by mouth with or without food as directed by your doctor. Swallow the tablet whole with a full glass of water.",
    dosage:
      "Dosage: The recommended dosage depends on your medical condition, age, and response to treatment. Your doctor will start you on a low dose and gradually increase it to minimize side effects.",
  },
  // Add more medicine entries related to head health as needed
  {
    name: "Pseudoephedrine",
    description:
      "Pseudoephedrine is a decongestant medication used to relieve nasal congestion caused by the common cold, sinusitis, hay fever, and other respiratory allergies. It works by narrowing the blood vessels in the nasal passages, which reduces swelling and congestion.",
    usage:
      "Take pseudoephedrine by mouth with or without food as directed by your doctor. Swallow the tablet whole with a full glass of water. Do not crush or chew extended-release tablets.",
    dosage:
      "Dosage: The recommended dosage depends on your age, medical condition, and response to treatment. Do not exceed the maximum daily dose. Consult your doctor for appropriate dosage.",
  },
  {
    name: "Dextromethorphan",
    description:
      "Dextromethorphan is a cough suppressant medication used to relieve dry, hacking coughs caused by the common cold or other respiratory tract infections. It works by suppressing the cough reflex in the brain.",
    usage:
      "Take dextromethorphan by mouth with or without food as directed by your doctor. Follow the dosage instructions provided on the label.",
    dosage:
      "Dosage: The recommended dosage depends on your age, medical condition, and response to treatment. Do not exceed the maximum daily dose. Consult your doctor for appropriate dosage.",
  },
  {
    name: "Guaifenesin",
    description:
      "Guaifenesin is an expectorant medication used to relieve chest congestion caused by the common cold, bronchitis, and other respiratory tract infections. It works by thinning and loosening mucus in the airways, making it easier to cough up.",
    usage:
      "Take guaifenesin by mouth with a full glass of water as directed by your doctor. Swallow the tablet whole. Follow the dosage instructions provided on the label.",
    dosage:
      "Dosage: The recommended dosage depends on your age, medical condition, and response to treatment. Drink plenty of fluids while taking guaifenesin to help loosen mucus. Consult your doctor for appropriate dosage.",
  },
  {
    name: "Acetaminophen (Paracetamol)",
    description:
      "Acetaminophen, also known as paracetamol, is a pain reliever and fever reducer commonly used to relieve symptoms of the common cold, such as headache, muscle aches, and fever.",
    usage:
      "Take acetaminophen by mouth with a full glass of water as directed by your doctor. Follow the dosage instructions provided on the label.",
    dosage:
      "Dosage: The recommended dosage depends on your age, weight, and medical condition. Do not exceed the maximum daily dose. Consult your doctor for appropriate dosage.",
  },
  {
    name: "Diphenhydramine",
    description:
      "Diphenhydramine is an antihistamine medication used to relieve symptoms of the common cold, such as sneezing, itching, watery eyes, and runny nose. It works by blocking the action of histamine, a substance in the body that causes allergic symptoms.",
    usage:
      "Take diphenhydramine by mouth with or without food as directed by your doctor. Swallow the tablet whole with a full glass of water.",
    dosage:
      "Dosage: The recommended dosage depends on your age, medical condition, and response to treatment. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Acetylcysteine",
    description:
      "Acetylcysteine is a mucolytic medication used to relieve chest congestion caused by the common cold, bronchitis, and other respiratory tract infections. It works by thinning and loosening mucus in the airways, making it easier to cough up.",
    usage:
      "Take acetylcysteine by mouth with a full glass of water as directed by your doctor. Follow the dosage instructions provided on the label.",
    dosage:
      "Dosage: The recommended dosage depends on your age, medical condition, and response to treatment. Drink plenty of fluids while taking acetylcysteine to help loosen mucus. Consult your doctor for appropriate dosage.",
  },
  {
    name: "Loratadine",
    description:
      "Loratadine is an antihistamine medication used to relieve symptoms of the common cold, such as sneezing, itching, watery eyes, and runny nose. It works by blocking the action of histamine, a substance in the body that causes allergic symptoms.",
    usage:
      "Take loratadine by mouth with or without food as directed by your doctor. Swallow the tablet whole with a full glass of water.",
    dosage:
      "Dosage: The recommended dosage depends on your age, medical condition, and response to treatment. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Chlorphenamine",
    description:
      "Chlorphenamine is an antihistamine medication used to relieve symptoms of the common cold, such as sneezing, itching, watery eyes, and runny nose. It works by blocking the action of histamine, a substance in the body that causes allergic symptoms.",
    usage:
      "Take chlorphenamine by mouth with or without food as directed by your doctor. Swallow the tablet whole with a full glass of water.",
    dosage:
      "Dosage: The recommended dosage depends on your age, medical condition, and response to treatment. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Loratadine",
    description:
      "Loratadine is an antihistamine medication used to relieve symptoms of allergies, including hay fever and allergic rhinitis. It can also help alleviate symptoms associated with the common cold, such as sneezing, runny nose, and itching.",
    usage:
      "Take loratadine by mouth with or without food, usually once a day or as directed by your doctor. Swallow the tablet whole with a full glass of water.",
    dosage:
      "Dosage: The recommended dosage depends on your age, medical condition, and response to treatment. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Cetirizine",
    description:
      "Cetirizine is an antihistamine medication used to relieve symptoms of allergies, such as hay fever, allergic rhinitis, and itching. It can also provide relief from symptoms associated with the common cold, including sneezing, runny nose, and watery eyes.",
    usage:
      "Take cetirizine by mouth with or without food, usually once a day or as directed by your doctor. Swallow the tablet whole with a full glass of water.",
    dosage:
      "Dosage: The recommended dosage depends on your age, medical condition, and response to treatment. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Chlorpheniramine/Pseudoephedrine",
    description:
      "Chlorpheniramine/Pseudoephedrine is a combination medication used to relieve symptoms of the common cold, such as nasal congestion, sneezing, runny nose, and itching. Chlorpheniramine is an antihistamine that reduces allergic symptoms, while pseudoephedrine is a decongestant that relieves nasal congestion.",
    usage:
      "Take chlorpheniramine/pseudoephedrine by mouth with or without food, as directed by your doctor. Swallow the tablets whole with a full glass of water.",
    dosage:
      "Dosage: The recommended dosage depends on your age, medical condition, and response to treatment. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Fexofenadine",
    description:
      "Fexofenadine is an antihistamine medication used to relieve symptoms of allergies, including hay fever, allergic rhinitis, and itching. It can also help alleviate symptoms associated with the common cold, such as sneezing, runny nose, and watery eyes.",
    usage:
      "Take fexofenadine by mouth with or without food, usually once a day or as directed by your doctor. Swallow the tablet whole with a full glass of water.",
    dosage:
      "Dosage: The recommended dosage depends on your age, medical condition, and response to treatment. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Diphenhydramine",
    description:
      "Diphenhydramine is an antihistamine medication used to relieve symptoms of allergies, including hay fever, allergic rhinitis, and itching. It can also provide relief from symptoms associated with the common cold, such as sneezing, runny nose, and watery eyes.",
    usage:
      "Take diphenhydramine by mouth with or without food, usually every 4 to 6 hours as needed, or as directed by your doctor. Swallow the tablet whole with a full glass of water.",
    dosage:
      "Dosage: The recommended dosage depends on your age, medical condition, and response to treatment. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Nasal Saline Spray",
    description:
      "Nasal saline spray is a non-medicated solution used to relieve nasal congestion and dryness caused by the common cold. It works by moisturizing the nasal passages and loosening mucus, making it easier to breathe.",
    usage:
      "Use nasal saline spray as directed by your doctor or as indicated on the product label. Gently insert the tip of the spray bottle into each nostril and spray the solution while inhaling gently.",
    dosage:
      "Dosage: The recommended dosage and frequency of use depend on your age and severity of symptoms. Follow the instructions provided on the product label or as directed by your doctor.",
  },
  {
    name: "Zinc Acetate Lozenges",
    description:
      "Zinc acetate lozenges are supplements containing zinc that may help reduce the duration and severity of cold symptoms. Zinc is believed to interfere with the replication of cold viruses in the body.",
    usage:
      "Take zinc acetate lozenges as directed by your doctor or as indicated on the product label. Allow the lozenge to dissolve slowly in your mouth and avoid chewing or swallowing it whole.",
    dosage:
      "Dosage: The recommended dosage and frequency of use depend on the concentration of zinc in the lozenge and your age. Follow the instructions provided on the product label or as directed by your doctor.",
  },
  {
    name: "Ginger Tea",
    description:
      "Ginger tea is a natural remedy that may help relieve symptoms of the common cold, including sore throat, cough, and nausea. Ginger has anti-inflammatory and antiviral properties that can help soothe the throat and reduce inflammation.",
    usage:
      "Prepare ginger tea by steeping fresh ginger slices or ginger tea bags in hot water for several minutes. Strain the tea and add honey or lemon for flavor, if desired. Drink the tea while it is warm.",
    dosage:
      "Dosage: There is no specific dosage for ginger tea, but you can drink it multiple times a day as needed to relieve cold symptoms. Adjust the strength of the tea and the amount of ginger according to your preference.",
  },
  {
    name: "Tamsulosin",
    description:
      "Tamsulosin is an alpha-blocker medication used to improve urine flow and relieve symptoms associated with enlarged prostate (benign prostatic hyperplasia, BPH), such as difficulty urinating, frequent urination, and urinary urgency. It can also help relax muscles in the ureter, facilitating the passage of kidney stones.",
    usage:
      "Take tamsulosin by mouth as directed by your doctor, usually once daily, 30 minutes after the same meal each day. Swallow the capsule whole with a full glass of water.",
    dosage:
      "Dosage: The recommended dosage depends on your medical condition and response to treatment. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Alpha-blockers (e.g., Terazosin, Doxazosin)",
    description:
      "Alpha-blockers are a class of medications used to relax the muscles in the prostate and bladder neck, improving urine flow and relieving symptoms associated with enlarged prostate (benign prostatic hyperplasia, BPH). They may also help relax muscles in the ureter, facilitating the passage of kidney stones.",
    usage:
      "Take alpha-blockers by mouth as directed by your doctor. Follow the dosage instructions provided on the label or as directed by your doctor.",
    dosage:
      "Dosage: The recommended dosage depends on the specific medication, your medical condition, and response to treatment. Follow your doctor's instructions carefully.",
  },
  {
    name: "Hydrochlorothiazide",
    description:
      "Hydrochlorothiazide is a diuretic medication used to treat high blood pressure and fluid retention (edema) by increasing urine production. It may also help prevent the formation of certain types of kidney stones by reducing the amount of calcium in the urine.",
    usage:
      "Take hydrochlorothiazide by mouth with or without food as directed by your doctor. Swallow the tablet whole with a full glass of water.",
    dosage:
      "Dosage: The recommended dosage depends on your medical condition and response to treatment. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Potassium citrate",
    description:
      "Potassium citrate is a medication used to prevent the formation of certain types of kidney stones (e.g., calcium oxalate stones, uric acid stones) by making urine less acidic. It can also help dissolve existing stones and reduce the risk of stone recurrence.",
    usage:
      "Take potassium citrate by mouth with or without food as directed by your doctor. Swallow the tablet whole with a full glass of water.",
    dosage:
      "Dosage: The recommended dosage depends on your medical condition and type of kidney stone. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Tamsulosin",
    description:
      "Tamsulosin is an alpha-blocker medication used to treat symptoms of benign prostatic hyperplasia (BPH) and kidney stones. It works by relaxing the muscles in the prostate and bladder neck, making it easier to urinate and helping to pass kidney stones more easily.",
    usage:
      "Take tamsulosin by mouth once daily, 30 minutes after the same meal each day, or as directed by your doctor. Swallow the capsule whole with a full glass of water.",
    dosage:
      "Dosage: The recommended dosage is typically 0.4 mg once daily. Follow your doctor's instructions carefully.",
  },
  {
    name: "Potassium Citrate",
    description:
      "Potassium citrate is a medication used to prevent and treat kidney stones. It works by making the urine less acidic, which helps to reduce the formation of certain types of kidney stones and may also help dissolve existing stones.",
    usage:
      "Take potassium citrate by mouth with a full glass of water, usually after meals or as directed by your doctor. Follow the dosage instructions provided on the label.",
    dosage:
      "Dosage: The recommended dosage depends on your medical condition and response to treatment. Follow your doctor's instructions carefully.",
  },
  {
    name: "Allopurinol",
    description:
      "Allopurinol is a medication used to prevent gout attacks and certain types of kidney stones by reducing the production of uric acid in the body. It helps to lower uric acid levels in the blood and urine, which can decrease the formation of uric acid stones.",
    usage:
      "Take allopurinol by mouth with or without food as directed by your doctor. Swallow the tablet whole with a full glass of water.",
    dosage:
      "Dosage: The recommended dosage depends on your medical condition and uric acid levels. Your doctor will start you on a low dose and gradually increase it to minimize side effects.",
  },
  {
    name: "Calcium Channel Blockers",
    description:
      "Calcium channel blockers are medications used to treat high blood pressure and certain heart conditions. They may also be prescribed to help relax the muscles in the urinary tract, which can facilitate the passage of kidney stones.",
    usage:
      "Take calcium channel blockers by mouth with or without food as directed by your doctor. Swallow the tablet whole with a full glass of water.",
    dosage:
      "Dosage: The recommended dosage depends on the specific medication and your medical condition. Follow your doctor's instructions carefully.",
  },
  {
    name: "Benzoyl Peroxide",
    description:
      "Benzoyl peroxide is a topical medication used to treat acne by reducing the bacteria that cause acne and by removing dead skin cells to prevent clogged pores. It also has anti-inflammatory properties that help reduce redness and swelling associated with pimples.",
    usage:
      "Apply benzoyl peroxide to the affected area(s) of the skin once or twice daily, or as directed by your doctor. Wash the affected area(s) with a gentle cleanser before applying benzoyl peroxide. Start with a lower concentration and gradually increase it to minimize skin irritation.",
    dosage:
      "Dosage: The recommended dosage depends on the concentration of benzoyl peroxide and your skin's response to treatment. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Salicylic Acid",
    description:
      "Salicylic acid is a topical medication used to treat acne by exfoliating the skin and unclogging pores. It helps to remove dead skin cells and excess oil, which can lead to the formation of pimples. Salicylic acid also has anti-inflammatory properties that help reduce redness and swelling associated with acne.",
    usage:
      "Apply salicylic acid to the affected area(s) of the skin once or twice daily, or as directed by your doctor. Wash the affected area(s) with a gentle cleanser before applying salicylic acid. Start with a lower concentration and gradually increase it to minimize skin irritation.",
    dosage:
      "Dosage: The recommended dosage depends on the concentration of salicylic acid and your skin's response to treatment. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Retinoids (Tretinoin, Adapalene, Tazarotene)",
    description:
      "Retinoids are topical medications derived from vitamin A that are used to treat acne by promoting skin cell turnover and preventing the formation of new comedones (clogged pores). They help to unclog pores, reduce inflammation, and promote the growth of healthy skin cells.",
    usage:
      "Apply retinoid medication to the affected area(s) of the skin once daily, usually in the evening, or as directed by your doctor. Wash the affected area(s) with a gentle cleanser before applying retinoids. Start with a lower concentration and gradually increase it to minimize skin irritation.",
    dosage:
      "Dosage: The recommended dosage depends on the specific retinoid medication, its concentration, and your skin's response to treatment. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Azelaic Acid",
    description:
      "Azelaic acid is a topical medication used to treat acne by reducing the growth of acne-causing bacteria and by normalizing the shedding of dead skin cells to prevent clogged pores. It also has anti-inflammatory properties that help reduce redness and swelling associated with acne.",
    usage:
      "Apply azelaic acid to the affected area(s) of the skin once or twice daily, or as directed by your doctor. Wash the affected area(s) with a gentle cleanser before applying azelaic acid.",
    dosage:
      "Dosage: The recommended dosage depends on the concentration of azelaic acid and your skin's response to treatment. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Clindamycin",
    description:
      "Clindamycin is an antibiotic medication used to treat acne by reducing the growth of acne-causing bacteria. It helps to decrease inflammation and prevent the formation of new pimples.",
    usage:
      "Apply clindamycin to the affected area(s) of the skin once or twice daily, or as directed by your doctor. Wash the affected area(s) with a gentle cleanser before applying clindamycin.",
    dosage:
      "Dosage: The recommended dosage depends on the concentration of clindamycin and your skin's response to treatment. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Erythromycin",
    description:
      "Erythromycin is an antibiotic medication used to treat acne by reducing the growth of acne-causing bacteria. It helps to decrease inflammation and prevent the formation of new pimples.",
    usage:
      "Apply erythromycin to the affected area(s) of the skin once or twice daily, or as directed by your doctor. Wash the affected area(s) with a gentle cleanser before applying erythromycin.",
    dosage:
      "Dosage: The recommended dosage depends on the concentration of erythromycin and your skin's response to treatment. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Sulfur",
    description:
      "Sulfur is a topical medication used to treat acne by reducing oiliness and unclogging pores. It helps to remove dead skin cells and excess oil, which can lead to the formation of pimples.",
    usage:
      "Apply sulfur to the affected area(s) of the skin once or twice daily, or as directed by your doctor. Wash the affected area(s) with a gentle cleanser before applying sulfur.",
    dosage:
      "Dosage: The recommended dosage depends on the concentration of sulfur and your skin's response to treatment. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Nicotinamide (Niacinamide)",
    description:
      "Nicotinamide, also known as niacinamide, is a form of vitamin B3 used to treat acne by reducing inflammation and decreasing the production of sebum (skin oil). It helps to improve the appearance of acne-prone skin and prevent the formation of new pimples.",
    usage:
      "Apply nicotinamide to the affected area(s) of the skin once or twice daily, or as directed by your doctor. Wash the affected area(s) with a gentle cleanser before applying nicotinamide.",
    dosage:
      "Dosage: The recommended dosage depends on the concentration of nicotinamide and your skin's response to treatment. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Artificial Tears",
    description:
      "Artificial tears are eye drops used to relieve dryness and irritation of the eyes caused by insufficient tear production or environmental factors. They help to lubricate the surface of the eye and provide temporary relief from discomfort.",
    usage:
      "Instill artificial tears into the affected eye(s) as needed, or as directed by your doctor. Tilt your head back, pull down the lower eyelid, and place the dropper above the eye. Do not touch the dropper tip to the eye or any other surface to prevent contamination.",
    dosage:
      "Dosage: The frequency of use depends on the severity of dryness and your doctor's recommendations. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Antibiotic Eye Drops/Ointments",
    description:
      "Antibiotic eye drops or ointments are medications used to treat bacterial eye infections such as conjunctivitis (pink eye) and bacterial keratitis. They work by killing or inhibiting the growth of bacteria in the eye.",
    usage:
      "Instill antibiotic eye drops into the affected eye(s) as directed by your doctor. Tilt your head back, pull down the lower eyelid, and place the dropper above the eye. Do not touch the dropper tip to the eye or any other surface to prevent contamination. Apply antibiotic ointment to the inside of the lower eyelid as directed.",
    dosage:
      "Dosage: The frequency of use and duration of treatment depend on the severity of the infection and your doctor's recommendations. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Corticosteroid Eye Drops/Ointments",
    description:
      "Corticosteroid eye drops or ointments are medications used to reduce inflammation and swelling in the eyes caused by conditions such as uveitis, allergic conjunctivitis, and certain eye injuries. They work by suppressing the immune response and reducing the production of inflammatory substances.",
    usage:
      "Instill corticosteroid eye drops into the affected eye(s) as directed by your doctor. Tilt your head back, pull down the lower eyelid, and place the dropper above the eye. Do not touch the dropper tip to the eye or any other surface to prevent contamination. Apply corticosteroid ointment to the inside of the lower eyelid as directed.",
    dosage:
      "Dosage: The frequency of use and duration of treatment depend on the severity of inflammation and your doctor's recommendations. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Antihistamine Eye Drops",
    description:
      "Antihistamine eye drops are medications used to relieve itching, redness, and swelling of the eyes caused by allergic conjunctivitis. They work by blocking the action of histamine, a substance in the body that causes allergic reactions.",
    usage:
      "Instill antihistamine eye drops into the affected eye(s) as directed by your doctor. Tilt your head back, pull down the lower eyelid, and place the dropper above the eye. Do not touch the dropper tip to the eye or any other surface to prevent contamination.",
    dosage:
      "Dosage: The frequency of use depends on the severity of allergic symptoms and your doctor's recommendations. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Lubricating Eye Gel",
    description:
      "Lubricating eye gel is a thicker formulation of artificial tears designed to provide longer-lasting relief from dryness and discomfort of the eyes. It helps to moisturize and protect the surface of the eye, especially during nighttime or in cases of severe dry eye.",
    usage:
      "Apply a small amount of lubricating eye gel to the affected eye(s) as needed, or as directed by your doctor. Squeeze a ribbon of gel along the inside of the lower eyelid. Blink several times to spread the gel over the eye surface.",
    dosage:
      "Dosage: The frequency of use depends on the severity of dryness and your doctor's recommendations. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Cyclosporine Eye Drops",
    description:
      "Cyclosporine eye drops are medications used to treat chronic dry eye disease (keratoconjunctivitis sicca) by reducing inflammation and promoting tear production. They work by suppressing the immune response and increasing the stability of the tear film.",
    usage:
      "Instill cyclosporine eye drops into the affected eye(s) twice daily, approximately 12 hours apart, or as directed by your doctor. Tilt your head back, pull down the lower eyelid, and place the dropper above the eye. Do not touch the dropper tip to the eye or any other surface to prevent contamination.",
    dosage:
      "Dosage: The frequency of use and duration of treatment depend on the severity of dry eye disease and your doctor's recommendations. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Olopatadine Eye Drops",
    description:
      "Olopatadine eye drops are antihistamine medications used to treat allergic conjunctivitis by relieving itching, redness, and swelling of the eyes. They work by blocking the action of histamine, a substance in the body that causes allergic reactions.",
    usage:
      "Instill olopatadine eye drops into the affected eye(s) once daily, or as directed by your doctor. Tilt your head back, pull down the lower eyelid, and place the dropper above the eye. Do not touch the dropper tip to the eye or any other surface to prevent contamination.",
    dosage:
      "Dosage: The frequency of use depends on the severity of allergic symptoms and your doctor's recommendations. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Loteprednol Eye Drops",
    description:
      "Loteprednol eye drops are corticosteroid medications used to treat inflammation of the eyes caused by conditions such as uveitis, allergic conjunctivitis, and certain eye injuries. They work by suppressing the immune response and reducing the production of inflammatory substances.",
    usage:
      "Instill loteprednol eye drops into the affected eye(s) as directed by your doctor. Tilt your head back, pull down the lower eyelid, and place the dropper above the eye. Do not touch the dropper tip to the eye or any other surface to prevent contamination.",
    dosage:
      "Dosage: The frequency of use and duration of treatment depend on the severity of inflammation and your doctor's recommendations. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Multivitamins with Minerals",
    description:
      "Multivitamins with minerals are supplements containing a combination of essential vitamins and minerals that help support overall health and vitality. They can help address weakness caused by nutritional deficiencies.",
    usage:
      "Take multivitamins with minerals orally with water, usually with a meal to enhance absorption. Follow the dosage instructions provided on the label or as directed by your doctor.",
    dosage:
      "Dosage: The recommended dosage depends on the specific formulation and your individual nutritional needs. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Coenzyme Q10 (CoQ10)",
    description:
      "Coenzyme Q10 (CoQ10) is a naturally occurring compound that plays a key role in energy production within cells. Supplementing with CoQ10 may help improve energy levels and alleviate weakness, especially in individuals with CoQ10 deficiency.",
    usage:
      "Take Coenzyme Q10 supplements orally with water, preferably with a meal to enhance absorption. Follow the dosage instructions provided on the label or as directed by your doctor.",
    dosage:
      "Dosage: The recommended dosage varies depending on individual needs and the specific condition being treated. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Creatine",
    description:
      "Creatine is a naturally occurring compound found in small amounts in foods like meat and fish. It is involved in energy production in muscles and may help improve muscle strength and endurance, reducing feelings of weakness.",
    usage:
      "Take creatine supplements orally with water, typically in divided doses throughout the day. Follow the loading phase (if recommended) and maintenance dosage instructions provided on the label or as directed by your doctor.",
    dosage:
      "Dosage: The recommended dosage varies depending on factors such as body weight, muscle mass, and physical activity level. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Ginseng",
    description:
      "Ginseng is a medicinal herb that has been traditionally used to improve energy levels, enhance physical and mental performance, and reduce feelings of fatigue and weakness.",
    usage:
      "Take ginseng supplements orally with water, as directed by the manufacturer or your healthcare provider. Follow the recommended dosage instructions provided on the label.",
    dosage:
      "Dosage: The recommended dosage varies depending on the specific formulation and your individual needs. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Somatropin (Human Growth Hormone)",
    description:
      "Somatropin is a synthetic form of human growth hormone (HGH) used to treat growth hormone deficiency in children and adults. It stimulates growth, increases muscle mass, and promotes bone density.",
    usage:
      "Somatropin is administered by injection under the skin (subcutaneously) or into a muscle (intramuscularly). The injection site may vary. Follow your doctor's instructions carefully.",
    dosage:
      "Dosage: The dosage and frequency of somatropin injections depend on the individual's age, weight, medical condition, and response to treatment. Follow your doctor's recommendations for dosage and administration schedule.",
  },
  {
    name: "Tesamorelin",
    description:
      "Tesamorelin is a synthetic growth hormone-releasing hormone (GHRH) analog used to treat HIV-associated lipodystrophy, a condition characterized by abnormal fat redistribution in the body. It stimulates the release of growth hormone, which may help improve body composition.",
    usage:
      "Tesamorelin is administered by injection under the skin (subcutaneously). Follow your doctor's instructions carefully.",
    dosage:
      "Dosage: The recommended dosage of tesamorelin is usually once daily. Your doctor will determine the appropriate dosage based on your medical condition and response to treatment.",
  },
  {
    name: "Anabolic Steroids",
    description:
      "Anabolic steroids are synthetic variations of the hormone testosterone, which is responsible for promoting muscle growth and bone density. They may be prescribed in cases of delayed puberty or certain medical conditions that result in muscle wasting.",
    usage:
      "Anabolic steroids are typically administered by injection or taken orally. Follow your doctor's instructions carefully, and never exceed the prescribed dosage.",
    dosage:
      "Dosage: The dosage and duration of anabolic steroid therapy depend on the individual's age, medical condition, and response to treatment. Follow your doctor's recommendations for dosage and administration schedule.",
  },
  {
    name: "Aromatase Inhibitors",
    description:
      "Aromatase inhibitors are medications that block the enzyme aromatase, which converts androgens (male hormones) into estrogen (female hormone). They may be used in boys with growth hormone deficiency to delay bone maturation, allowing for increased height potential.",
    usage:
      "Aromatase inhibitors are usually taken orally as tablets. Follow your doctor's instructions carefully.",
    dosage:
      "Dosage: The recommended dosage of aromatase inhibitors varies depending on the specific medication and individual factors. Follow your doctor's recommendations for dosage and administration schedule.",
  },
  {
    name: "Acetaminophen (Tylenol)",
    description:
      "Acetaminophen is a pain reliever and fever reducer commonly used to alleviate sore throat discomfort and reduce fever associated with infections.",
    usage:
      "Take acetaminophen orally with water as directed on the label or as prescribed by your doctor. Do not exceed the recommended dosage.",
    dosage:
      "Dosage: The recommended dosage for adults is usually 325-650 mg every 4-6 hours as needed, not to exceed 4000 mg in 24 hours. Dosage for children depends on age and weight; follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Ibuprofen (Advil, Motrin)",
    description:
      "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) that helps relieve pain, reduce inflammation, and lower fever. It can be effective in easing sore throat discomfort.",
    usage:
      "Take ibuprofen orally with water as directed on the label or as prescribed by your doctor. It is usually taken with food or milk to minimize stomach upset.",
    dosage:
      "Dosage: The recommended dosage for adults is usually 200-400 mg every 4-6 hours as needed, not to exceed 1200 mg in 24 hours. Dosage for children depends on age and weight; follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Throat Lozenges",
    description:
      "Throat lozenges are medicated tablets designed to dissolve slowly in the mouth to provide temporary relief from sore throat pain and irritation. They often contain ingredients like menthol, benzocaine, or dyclonine to numb the throat.",
    usage:
      "Allow throat lozenges to dissolve slowly in the mouth as directed on the package. Do not chew or swallow them whole.",
    dosage:
      "Dosage: Use as needed, typically one lozenge every 2-4 hours as directed. Avoid exceeding the recommended dosage to prevent side effects.",
  },
  {
    name: "Antibiotics (for bacterial infections)",
    description:
      "Antibiotics are medications used to treat bacterial infections that may cause sore throat, such as streptococcal infections (strep throat). They are only effective against bacterial, not viral, infections.",
    usage:
      "Take antibiotics orally with water as prescribed by your doctor. Complete the full course of treatment even if symptoms improve before the medication is finished.",
    dosage:
      "Dosage: The dosage and duration of antibiotic treatment depend on the specific medication prescribed and the severity of the infection. Follow your doctor's instructions carefully.",
  },
  {
    name: "Dextromethorphan (Robitussin DM)",
    description:
      "Dextromethorphan is a cough suppressant that can help relieve dry, non-productive cough associated with sore throat. It works by suppressing the cough reflex in the brain.",
    usage:
      "Take dextromethorphan orally with water as directed on the label or as prescribed by your doctor. Follow the recommended dosage instructions provided.",
    dosage:
      "Dosage: The recommended dosage for adults is usually 10-20 mg every 4 hours as needed, not to exceed 120 mg in 24 hours. Dosage for children depends on age and weight; follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Gargles and Mouthwashes",
    description:
      "Saltwater gargles or antiseptic mouthwashes can help soothe a sore throat and reduce inflammation. Gargling with warm saltwater can help loosen mucus and reduce the risk of bacterial growth.",
    usage:
      "For saltwater gargles, dissolve 1/4 to 1/2 teaspoon of salt in 8 ounces of warm water. Gargle with the solution for 30-60 seconds, then spit it out. Use mouthwashes as directed on the label.",
    dosage:
      "Dosage: Use gargles or mouthwashes as needed, typically several times a day or as directed. Do not swallow gargling solutions.",
  },
  {
    name: "Decongestants (Pseudoephedrine, Phenylephrine)",
    description:
      "Decongestants can help relieve nasal congestion and postnasal drip, which may contribute to sore throat discomfort. They work by narrowing blood vessels in the nasal passages, reducing swelling and congestion.",
    usage:
      "Take decongestants orally with water as directed on the label or as prescribed by your doctor. Avoid taking decongestants before bedtime, as they may cause insomnia.",
    dosage:
      "Dosage: The recommended dosage varies depending on the specific medication and formulation. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Hydration Therapy",
    description:
      "Increasing fluid intake, such as water, herbal teas, or broths, can help soothe a sore throat, keep the throat moist, and prevent dehydration. It can also help thin mucus and reduce throat irritation.",
    usage:
      "Drink plenty of fluids throughout the day, especially warm beverages like tea with honey or chicken soup. Avoid caffeinated or alcoholic beverages, as they can cause dehydration.",
    dosage:
      "Dosage: There is no specific dosage for hydration therapy, but aim to drink enough fluids to stay well-hydrated. Drink fluids regularly, even if you're not feeling thirsty.",
  },
  {
    name: "Antacids (e.g., Tums, Rolaids)",
    description:
      "Antacids are medications that help neutralize stomach acid to relieve symptoms of indigestion, heartburn, and acid reflux. They work by raising the pH level in the stomach, reducing acidity and providing quick relief.",
    usage:
      "Take antacids orally with water as directed on the label or as prescribed by your doctor. Chewable tablets should be chewed thoroughly before swallowing.",
    dosage:
      "Dosage: The recommended dosage varies depending on the specific antacid and formulation. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "H2 Blockers (e.g., Famotidine, Ranitidine)",
    description:
      "H2 blockers are medications that reduce the production of stomach acid by blocking histamine receptors in the stomach lining. They are used to treat heartburn, acid indigestion, and gastroesophageal reflux disease (GERD).",
    usage:
      "Take H2 blockers orally with water as directed on the label or as prescribed by your doctor. They are usually taken before meals or at bedtime.",
    dosage:
      "Dosage: The recommended dosage varies depending on the specific H2 blocker and your medical condition. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Proton Pump Inhibitors (PPIs) (e.g., Omeprazole, Esomeprazole)",
    description:
      "Proton pump inhibitors (PPIs) are medications that block the production of stomach acid by inhibiting the proton pump in the stomach lining. They are used to treat conditions such as GERD, ulcers, and erosive esophagitis.",
    usage:
      "Take PPIs orally with water as directed on the label or as prescribed by your doctor. They are usually taken before meals.",
    dosage:
      "Dosage: The recommended dosage varies depending on the specific PPI and your medical condition. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Antiemetics (e.g., Ondansetron, Metoclopramide)",
    description:
      "Antiemetics are medications used to prevent or relieve nausea and vomiting associated with stomach problems such as indigestion, gastritis, or gastroenteritis. They work by blocking neurotransmitters in the brain that trigger nausea and vomiting.",
    usage:
      "Take antiemetics orally with water as directed on the label or as prescribed by your doctor. They may be taken with or without food, depending on the specific medication.",
    dosage:
      "Dosage: The recommended dosage varies depending on the specific antiemetic and your medical condition. Follow the dosage instructions provided on the label or as directed by your doctor.",
  },
  {
    name: "Vitamin C Supplements (Ascorbic Acid)",
    description:
      "Vitamin C supplements contain ascorbic acid, the most common form of vitamin C. They are used to prevent or treat vitamin C deficiency, boost the immune system, and support overall health.",
    usage:
      "Take vitamin C supplements orally with water, preferably with a meal to enhance absorption. Follow the dosage instructions provided on the label or as directed by your doctor.",
    dosage:
      "Dosage: The recommended daily allowance (RDA) of vitamin C for adults is typically 75-90 mg for females and 90-120 mg for males. However, higher doses may be recommended for certain individuals or conditions. Follow your doctor's recommendations for dosage.",
  },
  {
    name: "Vitamin C Chewable Tablets",
    description:
      "Vitamin C chewable tablets offer a convenient way to supplement vitamin C intake, especially for individuals who have difficulty swallowing pills. They provide the same benefits as other forms of vitamin C supplements.",
    usage:
      "Chew vitamin C tablets thoroughly before swallowing, as directed on the label or by your healthcare provider.",
    dosage:
      "Dosage: Follow the dosage instructions provided on the label or as directed by your doctor. Dosage may vary depending on the strength of the tablets and individual needs.",
  },
  {
    name: "Vitamin C Effervescent Tablets",
    description:
      "Vitamin C effervescent tablets are dissolved in water to create a fizzy drink that delivers a dose of vitamin C. They are easy to take and may be preferred by those who dislike swallowing pills.",
    usage:
      "Dissolve one effervescent tablet in a glass of water according to the package instructions. Stir or swirl until the tablet is completely dissolved, then drink the solution.",
    dosage:
      "Dosage: Follow the dosage instructions provided on the label or as directed by your doctor. Dosage may vary depending on the strength of the tablets and individual needs.",
  },
  {
    name: "Vitamin C Gummies",
    description:
      "Vitamin C gummies are chewable supplements that come in the form of tasty, fruit-flavored gummy candies. They are a popular option for children and adults who prefer a more enjoyable way to take their vitamins.",
    usage:
      "Chew one or more gummies daily, as directed on the label or by your healthcare provider.",
    dosage:
      "Dosage: Follow the dosage instructions provided on the label or as directed by your doctor. Dosage may vary depending on the strength of the gummies and individual needs.",
  },
  {
    name: "Vitamin D3 Supplements (Cholecalciferol)",
    description:
      "Vitamin D3 supplements contain cholecalciferol, the most active form of vitamin D. They are used to prevent or treat vitamin D deficiency, support bone health, and regulate calcium and phosphorus metabolism.",
    usage:
      "Take vitamin D3 supplements orally with water, preferably with a meal containing fat to enhance absorption. Follow the dosage instructions provided on the label or as directed by your doctor.",
    dosage:
      "Dosage: The recommended daily allowance (RDA) of vitamin D for adults is typically 600-800 IU (International Units). However, higher doses may be recommended for individuals with deficiency or specific medical conditions. Follow your doctor's recommendations for dosage.",
  },
  {
    name: "Vitamin D2 Supplements (Ergocalciferol)",
    description:
      "Vitamin D2 supplements contain ergocalciferol, a form of vitamin D derived from plants. They are less commonly used than vitamin D3 supplements but can still be effective in preventing or treating vitamin D deficiency.",
    usage:
      "Take vitamin D2 supplements orally with water, preferably with a meal containing fat to enhance absorption. Follow the dosage instructions provided on the label or as directed by your doctor.",
    dosage:
      "Dosage: The recommended dosage of vitamin D2 may vary depending on individual needs and medical conditions. Follow your doctor's recommendations for dosage.",
  },
  {
    name: "Vitamin D Drops",
    description:
      "Vitamin D drops are liquid formulations of vitamin D, often used for infants, young children, or individuals who have difficulty swallowing pills. They provide a convenient way to administer vitamin D supplementation.",
    usage:
      "Administer vitamin D drops orally according to the package instructions or as directed by your healthcare provider. Drops can be added to food or drink or administered directly into the mouth.",
    dosage:
      "Dosage: Follow the dosage instructions provided on the package or as directed by your doctor. Dosage may vary depending on the concentration of the drops and individual needs.",
  },
  {
    name: "Vitamin D Fortified Foods",
    description:
      "Certain foods, such as milk, orange juice, cereal, and yogurt, may be fortified with vitamin D to increase dietary intake. These fortified foods can contribute to overall vitamin D intake, especially for individuals with limited sun exposure.",
    usage:
      "Incorporate vitamin D fortified foods into your diet as part of a balanced meal plan. Check food labels to identify products that have been fortified with vitamin D.",
    dosage:
      "Dosage: There is no specific dosage for vitamin D fortified foods, but they can contribute to meeting daily vitamin D requirements when consumed regularly as part of a healthy diet.",
  },
  {
    name: "Vitamin E Supplements (Alpha-Tocopherol)",
    description:
      "Vitamin E supplements typically contain alpha-tocopherol, a form of vitamin E with potent antioxidant properties. They are used to prevent or treat vitamin E deficiency and support overall health.",
    usage:
      "Take vitamin E supplements orally with water, preferably with a meal to enhance absorption. Follow the dosage instructions provided on the label or as directed by your doctor.",
    dosage:
      "Dosage: The recommended daily allowance (RDA) of vitamin E for adults is typically 15 mg (22.4 IU) of alpha-tocopherol. However, higher doses may be recommended for certain individuals or conditions. Follow your doctor's recommendations for dosage.",
  },
  {
    name: "Vitamin E Oil",
    description:
      "Vitamin E oil is a topical formulation containing vitamin E that is applied directly to the skin. It is used for its moisturizing properties and potential benefits for skin health, including reducing inflammation and promoting healing.",
    usage:
      "Apply vitamin E oil topically to the skin, massaging gently until absorbed. Use as directed on the product label or by your healthcare provider.",
    dosage:
      "Dosage: Use vitamin E oil as directed on the product label or by your healthcare provider. Avoid using excessive amounts, as it may cause skin irritation in some individuals.",
  },
  {
    name: "Vitamin E Capsules",
    description:
      "Vitamin E capsules contain vitamin E oil encapsulated in softgel capsules. They are taken orally and provide a convenient way to supplement vitamin E intake.",
    usage:
      "Swallow vitamin E capsules whole with water, as directed on the label or by your healthcare provider.",
    dosage:
      "Dosage: Follow the dosage instructions provided on the label or as directed by your doctor. Dosage may vary depending on the strength of the capsules and individual needs.",
  },
  {
    name: "Vitamin E Creams/Lotions",
    description:
      "Vitamin E creams and lotions are topical formulations containing vitamin E that are applied to the skin. They are used for their moisturizing and nourishing properties, and may help improve skin texture and appearance.",
    usage:
      "Apply vitamin E creams or lotions to clean, dry skin, massaging gently until absorbed. Use as directed on the product label or by your healthcare provider.",
    dosage:
      "Dosage: Use vitamin E creams or lotions as directed on the product label or by your healthcare provider. Avoid using excessive amounts, as it may cause skin irritation in some individuals.",
  },
  {
    name: "Antihistamines",
    description:
      "Antihistamines are medications that help reduce allergic reactions by blocking the effects of histamine, a substance in the body that contributes to itching, swelling, and other allergic symptoms.",
    usage:
      "Take antihistamines orally with water, as directed on the label or by your healthcare provider.",
    dosage:
      "Dosage: Follow the dosage instructions provided on the label or as directed by your doctor. Dosage may vary depending on the specific antihistamine and individual needs.",
  },
  {
    name: "Topical Steroids (Corticosteroids)",
    description:
      "Topical steroids are medications applied to the skin to reduce inflammation and itching associated with various skin conditions, such as eczema, psoriasis, and allergic reactions.",
    usage:
      "Apply topical steroids sparingly to affected areas of the skin, following the instructions provided by your healthcare provider.",
    dosage:
      "Dosage: Use topical steroids as directed by your doctor. Apply a thin layer to the affected skin once or twice daily, depending on the severity of the condition.",
  },
  {
    name: "Antibiotics (Topical or Oral)",
    description:
      "Antibiotics may be used to treat bacterial infections of the skin, such as cellulitis or impetigo. They can be applied topically as creams or ointments, or taken orally as tablets or capsules.",
    usage:
      "Follow your doctor's instructions for using antibiotics, whether applied topically or taken orally. Complete the full course of treatment, even if symptoms improve before the medication is finished.",
    dosage:
      "Dosage: The dosage and duration of antibiotic treatment depend on the specific medication prescribed and the severity of the infection. Follow your doctor's instructions carefully.",
  },
  {
    name: "Oral Retinoids (Isotretinoin)",
    description:
      "Oral retinoids are medications derived from vitamin A that are used to treat severe acne that has not responded to other treatments. They work by reducing oil production, preventing clogged pores, and promoting skin cell turnover.",
    usage:
      "Take oral retinoids orally with water, as directed by your doctor. Follow the dosage instructions provided carefully, and do not exceed the prescribed dosage.",
    dosage:
      "Dosage: The recommended dosage of oral retinoids depends on various factors, including the severity of acne and individual response to treatment. Your doctor will determine the appropriate dosage for you.",
  },
  {
    name: "Antifungal Creams",
    description:
      "Antifungal creams are medications used to treat fungal infections of the skin, such as athlete's foot, ringworm, and jock itch. They work by killing or preventing the growth of fungi that cause skin infections.",
    usage:
      "Apply antifungal creams to clean, dry skin affected by fungal infections, following the instructions provided on the product label or by your healthcare provider.",
    dosage:
      "Dosage: Use antifungal creams as directed by your doctor. Apply a thin layer to the affected area once or twice daily, depending on the severity of the infection.",
  },
  {
    name: "Moisturizers",
    description:
      "Moisturizers are topical formulations designed to hydrate and soothe the skin, helping to relieve dryness, itching, and irritation. They may contain ingredients such as humectants, occlusives, and emollients.",
    usage:
      "Apply moisturizers to clean, dry skin as needed, massaging gently until absorbed. Use products formulated for your skin type and specific concerns.",
    dosage:
      "Dosage: Use moisturizers as frequently as needed to keep the skin hydrated and comfortable. Apply after bathing or washing hands to lock in moisture.",
  },
  {
    name: "Salicylic Acid",
    description:
      "Salicylic acid is a beta hydroxy acid (BHA) commonly used in skincare products to exfoliate the skin, unclog pores, and treat acne, blackheads, and other blemishes. It also has anti-inflammatory properties.",
    usage:
      "Apply salicylic acid-containing products to clean, dry skin, following the instructions provided on the product label or by your healthcare provider.",
    dosage:
      "Dosage: Use salicylic acid products as directed by your doctor. Start with a lower concentration and gradually increase if tolerated. Apply once daily or as recommended.",
  },
  {
    name: "Oral Antihistamines (Non-Sedating)",
    description:
      "Non-sedating oral antihistamines are medications used to relieve itching and allergic reactions without causing drowsiness. They are often used to manage symptoms of allergic skin conditions, such as hives and eczema.",
    usage:
      "Take non-sedating oral antihistamines orally with water, as directed on the label or by your healthcare provider.",
    dosage:
      "Dosage: Follow the dosage instructions provided on the label or as directed by your doctor. Dosage may vary depending on the specific antihistamine and individual needs.",
  },

];

module.exports = mockMedicines;
