// Research Papers Data
// Papers from Prof. Raja Hashim Ali's Google Scholar profile

const researchPapers = [
{
    id: 1,
    title: "Identifying clusters of high confidence homologies in multiple sequence alignments",
    authors: "RH Ali, M Bogusz, S Whelan",
    venue: "",
    tags: ["bioinformatics", "machine-learning"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&citation_for_view=hLBNWsYAAAAJ:0EnyYjriUFMC"
},
{
    id: 2,
    title: "Significance of Machine Learning for Detection of Malicious Websites on an Unbalanced Dataset",
    authors: "I Ul Hassan, RH Ali, Z Ul Abideen, TA Khan, R Kouatly",
    venue: "",
    tags: ["machine-learning", "cybersecurity"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&citation_for_view=hLBNWsYAAAAJ:ULOm3_A8WrAC"
},
{
    id: 3,
    title: "Intrusion detection based on bidirectional long short-term memory with attention mechanism",
    authors: "Y Yang, S Tu, RH Ali, H Alasmary, M Waqas, MN Amjad",
    venue: "",
    tags: ["deep-learning", "cybersecurity"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&citation_for_view=hLBNWsYAAAAJ:YOwf2qJgpHMC"
},
{
    id: 4,
    title: "Identifying content unaware features influencing popularity of videos on YouTube: A study based on seven regions",
    authors: "Z Halim, S Hussain, RH Ali",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&citation_for_view=hLBNWsYAAAAJ:KlAtU1dfN6UC"
},
{
    id: 5,
    title: "Breast Cancer Classification and Proof of Key Artificial Neural Network Terminologies",
    authors: "N Ali, S Ansari, Z Halim, RH Ali, MF Khan, M Khan",
    venue: "",
    tags: ["deep-learning"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&citation_for_view=hLBNWsYAAAAJ:3fE2CSJIrl8C"
},
{
    id: 6,
    title: "Tracing the evolution of FERM domain of Kindlins",
    authors: "RH Ali, AA Khan",
    venue: "",
    tags: ["bioinformatics"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&citation_for_view=hLBNWsYAAAAJ:Tyk-4Ss8FVUC"
},
{
    id: 7,
    title: "Solving Graph Coloring Problem via Graph Neural Network (GNN)",
    authors: "AZ Ijaz, RH Ali, N Ali, T Laique, TA Khan",
    venue: "",
    tags: ["deep-learning"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&citation_for_view=hLBNWsYAAAAJ:qxL8FJ1GzNcC"
},
{
    id: 8,
    title: "VMCMC: a graphical and statistical analysis tool for Markov chain Monte Carlo traces",
    authors: "RH Ali, M Bark, J Miro, SA Muhammad, J Sjöstrand, SM Zubair, RM Abbas, ...",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&citation_for_view=hLBNWsYAAAAJ:UebtZRa9Y70C"
},
{
    id: 9,
    title: "Quantitative synteny scoring improves homology inference and partitioning of gene families",
    authors: "RH Ali, SA Muhammad, MA Khan, L Arvestad",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&citation_for_view=hLBNWsYAAAAJ:Y0pCki6q_DkC"
},
{
    id: 10,
    title: "Predictive analysis on severity of Non-Alcoholic Fatty Liver Disease (NAFLD) using Machine Learning Algorithms",
    authors: "MH Aslam, SF Hussain, RH Ali",
    venue: "",
    tags: ["machine-learning", "healthcare"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&citation_for_view=hLBNWsYAAAAJ:M3ejUd6NZC8C"
},
{
    id: 11,
    title: "B Cell Receptor Activation Predominantly Regulates AKT-mTORC1/2 Substrates Functionally Related to RNA Processing",
    authors: "DK Mohammad, RH Ali, JJ Turunen, BF Nore, CIE Smith",
    venue: "",
    tags: ["bioinformatics", "healthcare"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&citation_for_view=hLBNWsYAAAAJ:WF5omc3nYNoC"
},
{
    id: 12,
    title: "DocOnTap: AI-based disease diagnostic system and recommendation system",
    authors: "Z ul Abideen, TA Khan, RH Ali, N Ali, MM Baig, MS Ali",
    venue: "",
    tags: ["artificial-intelligence", "healthcare"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&citation_for_view=hLBNWsYAAAAJ:4DMP91E08xMC"
},
{
    id: 13,
    title: "A many-objective ensemble optimization algorithm for the edge cloud resource scheduling problem",
    authors: "J Zhang, Z Ning, RH Ali, M Waqas, S Tu, I Ahmad",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&citation_for_view=hLBNWsYAAAAJ:4TOpqqG69KYC"
},
{
    id: 14,
    title: "Evolutionary History of Alzheimer Disease-Causing Protein Family Presenilins with Pathological Implications",
    authors: "AA Khan, RH Ali, B Mirza",
    venue: "",
    tags: ["bioinformatics", "healthcare"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&citation_for_view=hLBNWsYAAAAJ:kNdYIx-mwKoC"
},
{
    id: 15,
    title: "Importance of Synteny in Homology Inference",
    authors: "AZ Ijaz, RH Ali, A Sarwar, TA Khan, MM Baig",
    venue: "",
    tags: ["bioinformatics", "machine-learning"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&citation_for_view=hLBNWsYAAAAJ:aqlVkmm33-oC"
},
{
    id: 16,
    title: "Innovative Poverty Estimation through Machine Learning Approaches",
    authors: "A Mashhood, Z ul Abideen, U Arshad, RH Ali, AA Khan, B Khan",
    venue: "",
    tags: ["machine-learning"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&citation_for_view=hLBNWsYAAAAJ:4JMBOYKVnBMC"
},
{
    id: 17,
    title: "The YOLOv8 Edge: Harnessing Custom Datasets for Superior Real-Time Detection",
    authors: "T Ahmed, A Maaz, D Mahmood, Z ul Abideen, U Arshad, RH Ali",
    venue: "",
    tags: ["deep-learning", "machine-learning"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&citation_for_view=hLBNWsYAAAAJ:r0BpntZqJG4C"
},
{
    id: 18,
    title: "An Enhanced Genetic Algorithm Framework for Efficient Solutions to Capacitated Vehicle Routing Problems",
    authors: "U Arshad, HH Ellahie, Z ul Abideen, RH Ali",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&citation_for_view=hLBNWsYAAAAJ:RHpTSmoSYBkC"
},
{
    id: 19,
    title: "Studying the effects of feature selection approaches on machine learning techniques for Mushroom classification problem",
    authors: "AB Siddique, MA Bakar, RH Ali, U Arshad, N Ali, ZU Abideen, TA Khan, ...",
    venue: "",
    tags: ["machine-learning"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&citation_for_view=hLBNWsYAAAAJ:mB3voiENLucC"
},
{
    id: 20,
    title: "Classification of Parkinson Disease with Feature Selection using Genetic Algorithm",
    authors: "M Iftikhar, N Ali, RH Ali, A Bais",
    venue: "",
    tags: ["machine-learning", "healthcare"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&citation_for_view=hLBNWsYAAAAJ:9ZlFYXVOiuMC"
},
{
    id: 21,
    title: "GenFamClust: an accurate, synteny-aware and reliable homology inference algorithm",
    authors: "RH Ali, SA Muhammad, L Arvestad",
    venue: "",
    tags: ["bioinformatics", "machine-learning"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:ufrVoPGSRksC"
},
{
    id: 22,
    title: "S18 family of mitochondrial ribosomal proteins: evolutionary history and Gly132 polymorphism in colon carcinoma",
    authors: "M Mushtaq, RH Ali, V Kashuba, G Klein, E Kashuba",
    venue: "",
    tags: ["bioinformatics", "healthcare"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:_FxGoFyzp5QC"
},
{
    id: 23,
    title: "AdaptiveCloset: Reinforcement Learning in Personalized Clothing Recommendations",
    authors: "OK Majeed, Z ul Abideen, U Arshad, RH Ali, A Habib, R Mustafa",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:R3hNpaxXUhUC"
},
{
    id: 24,
    title: "Exploring The Potential of HMMs in Linguistics for Part of Speech (POS) Tagging",
    authors: "M Iftikhar, RH Ali, M Saleem, U Arshad, AZ Ijaz, N Ali, M Imad, MA Bakar, ...",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:-f6ydRqryjwC"
},
{
    id: 25,
    title: "Detecting Cyberbullying using Machine Learning Approaches",
    authors: "A Haider, AB Siddique, RH Ali, M Imad, AZ Ijaz, U Arshad, N Ali, ...",
    venue: "",
    tags: ["machine-learning"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:L8Ckcad2t8MC"
},
{
    id: 26,
    title: "Performance Evaluation of Popular Deep Neural Networks for Neural Machine Translation",
    authors: "M Naeem, AB Siddique, RH Ali, U Arshad, Z ul Abideen, TA Khan, ...",
    venue: "",
    tags: ["deep-learning"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:maZDTaKrznsC"
},
{
    id: 27,
    title: "Scene Parsing Using Fully Convolutional Network for Semantic Segmentation",
    authors: "N Ali, AZ Ijaz, RH Ali, ZU Abideen, A Bais",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:mVmsd5A6BfQC"
},
{
    id: 28,
    title: "American Sign Language Character Recognition using Convolutional Neural Networks",
    authors: "A Abdullah, N Ali, RH Ali, ZU Abideen, AZ Ijaz, A Bais",
    venue: "",
    tags: ["deep-learning"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:Wp0gIr-vW9MC"
},
{
    id: 29,
    title: "A New Rhythm in A1: Convolutional Neural Networks for Music Genre Classification",
    authors: "H Javed, U Arshad, Z ul Abideen, RH Ali",
    venue: "",
    tags: ["deep-learning"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:TFP_iSt0sucC"
},
{
    id: 30,
    title: "Revolutionizing Campus Exploration with GikiLenS: A Deep Learning-Powered Object Detection App",
    authors: "I Mueed, U Arshad, RH Ali",
    venue: "",
    tags: ["deep-learning"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:iH-uZ7U-co4C"
},
{
    id: 31,
    title: "Custom Hidden Markov Models for Effective Part-of-Speech Tagging",
    authors: "HB Khalid, AB Siddique, RH Ali",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:e5wmG9Sq2KIC"
},
{
    id: 32,
    title: "Prediction of Polycystic Ovary Syndrome Using Genetic Algorithm-driven Feature Selection",
    authors: "F Faridoon, RH Ali, ZU Abideen, N Shahzadi, AZ Ijaz, U Arshad, N Ali, ...",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:TQgYirikUcIC"
},
{
    id: 33,
    title: "Optimizing Airline Networks: A Comparative Analysis of Graph-Based Techniques",
    authors: "M Iftikhar, RH Ali, M Saleem, N Shahzadi, U Arshad, TA Khan, AZ Ijaz, ...",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:HDshCWvjkbEC"
},
{
    id: 34,
    title: "A Review of Algorithms’s Complexities on Different Valued Sorted and Unsorted Data",
    authors: "A Shabbir, A Majeed, M Iftikhar, RH Ali, U Arshad, MZ Shabbir, AZ Ijaz, ...",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:hFOr9nPyWt4C"
},
{
    id: 35,
    title: "Genetic Algorithm-Based Feature Selection for Accurate Breast Cancer Classification",
    authors: "A Shabbir, RH Ali, MZ Shabbir, ZU Abideen, TA Khan, AZ Ijaz, N Ali, ...",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:ZeXyd9-uunAC"
},
{
    id: 36,
    title: "Deciphering Faces: Enhancing Emotion Detection with Machine Learning Techniques",
    authors: "MH Ishaq, R Mustafa, U Arshad, Z ul Abideen, RH Ali, A Habib",
    venue: "",
    tags: ["machine-learning"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:j3f4tGmQtD8C"
},
{
    id: 37,
    title: "Enhancing rangeland weed detection through convolutional neural networks and transfer learning",
    authors: "C Shackleton, RH Ali, TA Khan",
    venue: "",
    tags: ["deep-learning"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:NMxIlDl6LWMC"
},
{
    id: 38,
    title: "Mitigating Crop Losses: AI-enabled Disease Detection in Tomato Plants",
    authors: "H Ashfaq, U Arshad, RH Ali, Z ul Abideen, MH Shah, TA Khan, AZ Ijaz, ...",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:M3NEmzRMIkIC"
},
{
    id: 39,
    title: "Stock Price Forecasting using Hidden Markov Models",
    authors: "A Shabbir, RH Ali, MZ Shabbir, ZU Abideen, AZ Ijaz, N Ali, MH Shah, ...",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:hC7cP41nSMkC"
},
{
    id: 40,
    title: "Leveraging AI and NLP in Chatbot Development: An Experimental Study",
    authors: "AW Paracha, U Arshad, RH Ali, ZU Abideen, MH Shah, TA Khan, AZ Ijaz, ...",
    venue: "",
    tags: ["artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:hMod-77fHWUC"
},
{
    id: 41,
    title: "Identifying COVID-19 through X-ray and CT scan images using Machine Learning",
    authors: "M Shehzadi, U Arshad, Z Abideen, RH Ali, AA Khan, AZ Ijaz",
    venue: "",
    tags: ["machine-learning", "healthcare", "deep-learning"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:bEWYMUwI8FkC"
},
{
    id: 42,
    title: "Investigating novel machine learning based intrusion detection models for NSL-KDD data sets",
    authors: "MH Shah, MA Bakar, RH Ali, ZU Abideen, U Arshad, AZ Ijaz, N Ali, M Imad, ...",
    venue: "",
    tags: ["machine-learning", "cybersecurity"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:7PzlFSSx8tAC"
},
{
    id: 43,
    title: "From genomes to post-processing of Bayesian inference of phylogeny",
    authors: "RH Ali",
    venue: "",
    tags: ["bioinformatics", "machine-learning"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:eQOLeE2rZwMC"
},
{
    id: 44,
    title: "Robust and Reliable Liveness Detection Models for Facial Recognition Systems",
    authors: "H Anjum, U Arshad, RH Ali, ZU Abideen, MH Shah, TA Khan, AZ Ijaz, ...",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:blknAaTinKkC"
},
{
    id: 45,
    title: "Towards Effective Emotion Detection: A Comprehensive Machine Learning Approach on EEG Signals",
    authors: "I Ul Hassan, RH Ali, Z Abideen, AZ Ijaz, TA Khan",
    venue: "",
    tags: ["machine-learning"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:dhFuZR0502QC"
},
{
    id: 46,
    title: "Determining the relationship between gene class network graph and gene age",
    authors: "RH Ali",
    venue: "",
    tags: ["bioinformatics", "machine-learning"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:roLk4NBRz8UC"
},
{
    id: 47,
    title: "Enhancing Flood Resilience: Streamflow Forecasting and Inundation Modeling in Pakistan",
    authors: "M Shehzadi, RH Ali, Z Abideen, AZ Ijaz, TA Khan",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:k_IJM867U9cC"
},
{
    id: 48,
    title: "Performance comparison of genetic algorithms with traditional search techniques on the N-Queen Problem",
    authors: "OK Majeed, RH Ali, AZ Ijaz, N Ali, U Arshad, M Imad, S Nabi, J Tahir, ...",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:IWHjjKOFINEC"
},
{
    id: 49,
    title: "Virtual Reality Based Interior Designing Using Amazon Web Services",
    authors: "RH Ali, AZ Ijaz, MH Shah, N Ali, M Imad, S Nabi, K Perveen, J Tahir, ...",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:qUcmZB5y_30C"
},
{
    id: 50,
    title: "A Novel NLP-based Stock Market Price Prediction and Risk Analysis Framework",
    authors: "Z Ul-Abidden, RH Ali, AI Zeeshan, TA Khan",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:YFjsv_pBGBYC"
},
{
    id: 51,
    title: "Exploiting Partial Observability and Optimized Simple State Representations in Deep Q-Learning",
    authors: "D Mahmood, U Arshad, RH Ali, ZU Abideen, MH Shah, TA Khan, AZ Ijaz, ...",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:JV2RwH3_ST0C"
},
{
    id: 52,
    title: "Diving into Brain Complexity: Exploring Functional and Effective Connectivity Networks",
    authors: "AB Siddique, HB Khalid, RH Ali",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:_Qo2XoVZTnwC"
},
{
    id: 53,
    title: "Explainable AI for Depression Detection and Severity Classification From Activity Data: Development and Evaluation Study of an Interpretable Framework",
    authors: "I Ahmed, A Brahmacharimayum, RH Ali, TA Khan, MO Ahmad",
    venue: "",
    tags: ["explainable-ai", "healthcare", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:D03iK_w7-QYC"
},
{
    id: 54,
    title: "ASL Recognition using Deep Learning Algorithms",
    authors: "A Khan, RH Ali, U Akmal, A Ramazan",
    venue: "",
    tags: ["deep-learning"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:35N4QoGY0k4C"
},
{
    id: 55,
    title: "Artificial Intelligence-based phonocardiogram signal classification using segment-specific multi-domain features for cardiovascular and arterial disease",
    authors: "SS Bukhari, SU Ansari, KK Jadoon, RH Ali",
    venue: "",
    tags: ["artificial-intelligence", "healthcare", "machine-learning"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:_xSYboBqXhAC"
},
{
    id: 56,
    title: "A Scalable AI Approach to Bird Species Identification for Conservation and Ecological Planning",
    authors: "S Hassanie, A Gohar, RH Ali, TA Khan, I Ahmed, S Faiz",
    venue: "",
    tags: ["artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:a0OBvERweLwC"
},
{
    id: 57,
    title: "Crafting a Player Impact Metric through analysis of football match event data",
    authors: "M Elsharkawi, RH Ali, TA Khan",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:SeFeTyx0c_EC"
},
{
    id: 58,
    title: "Enhancing Fake News Detection Using BERT: A Comparative Analysis of Logistic Regression, RFC, LSTM and BERT",
    authors: "A Ramzan, RH Ali, N Ali, A Khan",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:ldfaerwXgEUC"
},
{
    id: 59,
    title: "Using Convolutional Neural Networks for Enhanced Pneumonia Detection via Chest X-Rays",
    authors: "W Babar, RH Ali, A Faheem, SA Mansoor",
    venue: "",
    tags: ["deep-learning"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:70eg2SAEIzsC"
},
{
    id: 60,
    title: "An Integrated AI Framework for Personalized Nutrition Using Machine Learning and Natural Language Processing for Dietary Recommendations",
    authors: "SK Aydın, RH Ali, S Faiz, TA Khan",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:u_35RYKgDlwC"
},
{
    id: 61,
    title: "Optimizing FCN for devices with limited resources using quantization and sparsity enhancement",
    authors: "MF Khan, N Ali, RH Ali, A Alasiry, M Marzougui, SA Algamdi, Y Nam",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:yD5IFk8b50cC"
},
{
    id: 62,
    title: "Enhanced Biometric Security Through Infrared Vein Pattern Recognition",
    authors: "MH Ishaq, RH Ali, R Koutaly, TA Khan, I Ahmad",
    venue: "",
    tags: ["cybersecurity", "machine-learning"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:zA6iFVUQeVQC"
},
{
    id: 63,
    title: "Enhancing Student Retention: Predictive Machine Learning Models for Identifying and Preventing University Dropout",
    authors: "A Abdullah, RH Ali, R Koutaly, TA Khan, I Ahmad",
    venue: "",
    tags: ["machine-learning"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:3s1wT3WcHBgC"
},
{
    id: 64,
    title: "Streamlining Attendance with Voice Recognition via Gaussian Mixture Model",
    authors: "N Ali, K Ali, F Ali, A Ali, N Ali, RH Ali",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:vV6vV6tmYwMC"
},
{
    id: 65,
    title: "VigilantAI: Real-time detection of anomalous activity from a video stream using deep learning",
    authors: "D Javed, U Arshad, S Peerzada, MR Saud, N Ali, RH Ali",
    venue: "",
    tags: ["deep-learning"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:GnPB-g6toBAC"
},
{
    id: 66,
    title: "A graph-based approach for improving the homologyinference in multiple sequence alignments",
    authors: "RH Ali, M Bogusz, S Whelan",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:_kc_bZDykSQC"
},
{
    id: 67,
    title: "Improved parameter estimation of triple-diode photovoltaic systems",
    authors: "O Ajetunmobi, TA Khan, SAA Rizvi, RH Ali",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:pyW8ca7W8N0C"
},
{
    id: 68,
    title: "Classifying complex multimorbidity using latent class analysis and machine learning to generate insights into clustering of mental and cardiometabolic conditions",
    authors: "M Mukherjee, S Mukherjee, HR Thokala, RH Ali",
    venue: "",
    tags: ["machine-learning", "healthcare"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:b0M2c_1WBrUC"
},
{
    id: 69,
    title: "Data-Driven Baseline Analysis of Climate Variability at an Antarctic AWS (2020–2024)",
    authors: "AJ Ashok, S Faiz, RH Ali, TA Khan",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:bFI3QPDXJZMC"
},
{
    id: 70,
    title: "Evaluating Machine Learning Techniques for Brain Tumor Detection with Emphasis on Few-Shot Learning Using MAML",
    authors: "SS Vaidya, RH Ali, S Faiz, I Ahmed, TA Khan",
    venue: "",
    tags: ["machine-learning", "healthcare", "deep-learning"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:f2IySw72cVMC"
},
{
    id: 71,
    title: "Fruit and Vegetable Recognition Using MobileNetV2: An Image Classification Approach",
    authors: "S Khalid, RH Ali, HB Khalid",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:J_g5lzvAfSwC"
},
{
    id: 72,
    title: "Innovative Image Enhancement via GANs: Addressing Noise, Resolution, and Artifact Challenges",
    authors: "AW Paracha, SFA Kazmi, M Abbas, H Anjum, RH Ali",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:fPk4N6BV_jEC"
},
{
    id: 73,
    title: "Segmentation of Beer Consumers in Europe using. K-means Clustering",
    authors: "V Kobkuvattana, TA Khan, I Ahmed, R Kouatly, RH Ali, M Karunanithi",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:cFHS6HbyZ2cC"
},
{
    id: 74,
    title: "Analysing Public Perception of South Korea's Low Birth Rate Policies Using NLP-based Sentiment Analysis",
    authors: "S Lee, RH Ali, TA Khan, M Karunanithi, I Ahmad, R Kouatly",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:4OULZ7Gr8RgC"
},
{
    id: 75,
    title: "Solving N-Queens Problem using Exhaustive Search and a Novel Genetic Algorithm",
    authors: "G Alizadehbirjandi, RH Ali, R Koutaly, TA Khan, I Ahmad",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:rO6llkc54NcC"
},
{
    id: 76,
    title: "Comparison of Leading AI Models an Analytical Study of ChatGPT Google Bard and Microsoft Bing",
    authors: "P Adomako, TA Khan, RH Ali, R Koutaly",
    venue: "",
    tags: ["artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:HoB7MX3m0LUC"
},
{
    id: 77,
    title: "Evaluation of Boosting Algorithms for Skin Cancer Classification Using the PAD-UFES-20 Dataset and Custom CNN Feature Extraction",
    authors: "D Javed, U Arshad, H Irfan, RH Ali, TA Khan",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:EUQCXRtRnyEC"
},
{
    id: 78,
    title: "Towards a More Natural Urdu: A Comprehensive Approach to Text-to-Speech and Voice Cloning",
    authors: "MR Saud, MR Imran, RH Ali",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:RGFaLdJalmkC"
},
{
    id: 79,
    title: "VGG Models in Image Captioning: Which Architecture Delivers Better Descriptions?",
    authors: "A Maaz, S Abbas, RH Ali, I Ahmed, TA Khan",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:pqnbT2bcN3wC"
},
{
    id: 80,
    title: "Automatic Timetable Generation using Neural Networks Trained by Genetic Algorithms",
    authors: "S Abbas, A Maaz, RH Ali, TA Khan, I Ahmed",
    venue: "",
    tags: ["deep-learning"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:g5m5HwL7SMYC"
},
{
    id: 81,
    title: "Machine learning based fraudulent detection system for financial transactions",
    authors: "W Alam, RH Ald, N Ali, M Imad, ZU Abideen, MH Shah",
    venue: "",
    tags: ["machine-learning"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:ZHo1McVdvXMC"
},
{
    id: 82,
    title: "Traffic Sign Recognition System",
    authors: "M Ahmed, RH Ali, N Ali",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:M05iB0D1s5AC"
},
{
    id: 83,
    title: "Bank Note Authentication using Deep Learning",
    authors: "RM Mian, S Khan, RH Ali",
    venue: "",
    tags: ["deep-learning"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:2P1L_qKh6hAC"
},
{
    id: 84,
    title: "A novel machine learning approach for revolutionizing orthodontic care",
    authors: "H Qayyum, R Ali",
    venue: "",
    tags: ["machine-learning"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:lSLTfruPkqcC"
},
{
    id: 85,
    title: "A Novel Approach for Sketch Colorization Using Generative AI",
    authors: "D Javed, M Shehzadi, S Peerzada, R Ali, M Ashfaq",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:NaGl4SEjCO4C"
},
{
    id: 86,
    title: "Accessible Vision: Empowering the Visually Impaired through Voice-Assisted Object Recognition and Spatial Awareness",
    authors: "M Saud, M Imran, S Bhatti, R Ali",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:ns9cj8rnVeAC"
},
{
    id: 87,
    title: "Customized Learning for ADHD: An AI-Driven Assistive Study App",
    authors: "R Mustafa, A Habib, R Ali",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:O3NaXMp0MMsC"
},
{
    id: 88,
    title: "Image Enhancement Using Generative Adversarial Networks in Computer Vision",
    authors: "A Paracha, S Kazmi, M Abbas, H Anjum, R Ali",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:BqipwSGYUEgC"
},
{
    id: 89,
    title: "Computer Whiz for Grade 6",
    authors: "RH Ali, RM Ali",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:isC4tDSrTZIC"
},
{
    id: 90,
    title: "Examining sequence alignments using a model-based approach",
    authors: "M Bogusz, RH Ali, S Whelan",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:5nxA0vEk-isC"
},
{
    id: 91,
    title: "Burnin estimation and convergence assessment in Bayesian phylogenetic inference",
    authors: "RH Ali, L Arvestad",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:YsMSGLbcyi4C"
},
{
    id: 92,
    title: "LipSync - lip synchronization with speech",
    authors: "RH Ali, IT Bhatti, MS Safri, W Said",
    venue: "",
    tags: ["machine-learning", "artificial-intelligence"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:LkGwnXOMwfcC"
},
{
    id: 93,
    title: "Predicting and Identifying Correlates of Inequalities in Breast Cancer Screening Uptake using National Data from India",
    authors: "A Tanveer, RH Ali, J Majhi, M Mukherjee",
    venue: "",
    tags: ["machine-learning", "healthcare"],
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hLBNWsYAAAAJ&cstart=20&pagesize=80&citation_for_view=hLBNWsYAAAAJ:abG-DnoFyZgC"
},
    
    // Prof. Talha Ali Khan Papers
    {
        id: 94,
        title: "Review on electrical impedance tomography: Artificial intelligence methods and its applications",
        authors: "TA Khan, SH Ling",
        venue: "",
        tags: ["artificial-intelligence", "healthcare"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Z-t0qwoAAAAJ&citation_for_view=Z-t0qwoAAAAJ:r0BpntZqJG4C"
    },
    {
        id: 95,
        title: "Significance of machine learning for detection of malicious websites on an unbalanced dataset",
        authors: "I Ul Hassan, RH Ali, Z Ul Abideen, TA Khan, R Kouatly",
        venue: "",
        tags: ["machine-learning", "cybersecurity"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Z-t0qwoAAAAJ&citation_for_view=Z-t0qwoAAAAJ:ZHo1McVdvXMC"
    },
    {
        id: 96,
        title: "Network intrusion detection and its strategic importance",
        authors: "MK Asif, TA Khan, TA Taj, U Naeem, S Yakoob",
        venue: "",
        tags: ["cybersecurity", "machine-learning"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Z-t0qwoAAAAJ&citation_for_view=Z-t0qwoAAAAJ:d1gkVwhDpl0C"
    },
    {
        id: 97,
        title: "A novel hybrid gravitational search particle swarm optimization algorithm",
        authors: "TA Khan, SH Ling",
        venue: "",
        tags: ["machine-learning", "artificial-intelligence"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Z-t0qwoAAAAJ&citation_for_view=Z-t0qwoAAAAJ:2P1L_qKh6hAC"
    },
    {
        id: 98,
        title: "Solving graph coloring problem via graph neural network (gnn)",
        authors: "AZ Ijaz, RH Ali, N Ali, T Laique, TA Khan",
        venue: "",
        tags: ["deep-learning", "machine-learning"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Z-t0qwoAAAAJ&citation_for_view=Z-t0qwoAAAAJ:fPk4N6BV_jEC"
    },
    {
        id: 99,
        title: "Acetone–Gasoline blend as an alternative fuel in SI engines: a novel comparison of performance, emission, and lube oil degradation",
        authors: "M Usman, T Khan, F Riaz, MA Ijaz Malik, MT Amjad, MH Shah, WM Ashraf, ...",
        venue: "",
        tags: ["data-science"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Z-t0qwoAAAAJ&citation_for_view=Z-t0qwoAAAAJ:p2g8aNsByqUC"
    },
    {
        id: 100,
        title: "Docontap: Ai-based disease diagnostic system and recommendation system",
        authors: "Z ul Abideen, TA Khan, RH Ali, N Ali, MM Baig, MS Ali",
        venue: "",
        tags: ["artificial-intelligence", "healthcare"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Z-t0qwoAAAAJ&citation_for_view=Z-t0qwoAAAAJ:cFHS6HbyZ2cC"
    },
    {
        id: 101,
        title: "Importance of synteny in homology inference",
        authors: "AZ Ijaz, RH Ali, A Sarwar, TA Khan, MM Baig",
        venue: "",
        tags: ["bioinformatics", "machine-learning"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Z-t0qwoAAAAJ&citation_for_view=Z-t0qwoAAAAJ:dfsIfKJdRG4C"
    },
    {
        id: 102,
        title: "Optimization of biomimetic heliostat field using heuristic optimization algorithms",
        authors: "AA Rizvi, D Yang, TA Khan",
        venue: "",
        tags: ["machine-learning", "artificial-intelligence"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Z-t0qwoAAAAJ&citation_for_view=Z-t0qwoAAAAJ:SeFeTyx0c_EC"
    },
    {
        id: 103,
        title: "Hybrid stepper motor and its controlling techniques a survey",
        authors: "TA Khan, TA Taj, I Ijaz",
        venue: "",
        tags: ["data-science"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Z-t0qwoAAAAJ&citation_for_view=Z-t0qwoAAAAJ:W7OEmFMy1HYC"
    },
    {
        id: 104,
        title: "Studying the effects of feature selection approaches on machine learning techniques for Mushroom classification problem",
        authors: "AB Siddique, MA Bakar, RH Ali, U Arshad, N Ali, ZU Abideen, TA Khan, ...",
        venue: "",
        tags: ["machine-learning"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Z-t0qwoAAAAJ&citation_for_view=Z-t0qwoAAAAJ:P5F9QuxV20EC"
    },
    {
        id: 105,
        title: "Performance evaluation of popular deep neural networks for neural machine translation",
        authors: "M Naeem, AB Siddique, RH Ali, U Arshad, Z ul Abideen, TA Khan, ...",
        venue: "",
        tags: ["deep-learning", "machine-learning"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Z-t0qwoAAAAJ&citation_for_view=Z-t0qwoAAAAJ:UxriW0iASnsC"
    },
    {
        id: 106,
        title: "A survey of the state-of-the-art swarm intelligence techniques and their application to an inverse design problem",
        authors: "TA Khan, SH Ling",
        venue: "",
        tags: ["machine-learning", "artificial-intelligence"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Z-t0qwoAAAAJ&citation_for_view=Z-t0qwoAAAAJ:70eg2SAEIzsC"
    },
    {
        id: 107,
        title: "Genetic Algorithm-Based Feature Selection for Accurate Breast Cancer Classification",
        authors: "A Shabbir, RH Ali, MZ Shabbir, ZU Abideen, TA Khan, AZ Ijaz, ...",
        venue: "",
        tags: ["machine-learning", "healthcare"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Z-t0qwoAAAAJ&citation_for_view=Z-t0qwoAAAAJ:1sJd4Hv_s6UC"
    },
    {
        id: 108,
        title: "Optimizing Airline Networks: A Comparative Analysis of Graph-Based Techniques",
        authors: "M Iftikhar, RH Ali, M Saleem, N Shahzadi, U Arshad, TA Khan, AZ Ijaz, ...",
        venue: "",
        tags: ["machine-learning", "data-science"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Z-t0qwoAAAAJ&citation_for_view=Z-t0qwoAAAAJ:CHSYGLWDkRkC"
    },
    {
        id: 109,
        title: "Enhancing rangeland weed detection through convolutional neural networks and transfer learning",
        authors: "C Shackleton, RH Ali, TA Khan",
        venue: "",
        tags: ["deep-learning", "machine-learning"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Z-t0qwoAAAAJ&citation_for_view=Z-t0qwoAAAAJ:WbkHhVStYXYC"
    },
    {
        id: 110,
        title: "Mitigating crop losses: Ai-enabled disease detection in tomato plants",
        authors: "H Ashfaq, U Arshad, RH Ali, Z ul Abideen, MH Shah, TA Khan, AZ Ijaz, ...",
        venue: "",
        tags: ["artificial-intelligence", "machine-learning"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Z-t0qwoAAAAJ&citation_for_view=Z-t0qwoAAAAJ:SP6oXDckpogC"
    },
    {
        id: 111,
        title: "Leveraging AI and NLP in chatbot development: An experimental study",
        authors: "AW Paracha, U Arshad, RH Ali, ZU Abideen, MH Shah, TA Khan, AZ Ijaz, ...",
        venue: "",
        tags: ["artificial-intelligence", "machine-learning"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Z-t0qwoAAAAJ&citation_for_view=Z-t0qwoAAAAJ:u9iWguZQMMsC"
    },
    {
        id: 112,
        title: "An improved gravitational search algorithm for solving an electromagnetic design problem",
        authors: "TA Khan, SH Ling",
        venue: "",
        tags: ["machine-learning", "artificial-intelligence"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Z-t0qwoAAAAJ&citation_for_view=Z-t0qwoAAAAJ:NaGl4SEjCO4C"
    },
    {
        id: 113,
        title: "Advanced particle swarm optimization algorithm with improved velocity update strategy",
        authors: "TA Khan, SH Ling, AS Mohan",
        venue: "",
        tags: ["machine-learning", "artificial-intelligence"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Z-t0qwoAAAAJ&citation_for_view=Z-t0qwoAAAAJ:_Qo2XoVZTnwC"
    },
    
    // Prof. Iftikhar Ahmed Papers
    {
        id: 114,
        title: "Fake News Detection Using Machine Learning Ensemble Methods",
        authors: "I Ahmad, M Yousaf, S Yousaf, MO Ahmad",
        venue: "",
        tags: ["machine-learning", "artificial-intelligence"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=wEdc-UUAAAAJ&citation_for_view=wEdc-UUAAAAJ:_Re3VWB3Y0AC"
    },
    {
        id: 115,
        title: "Optimizing Pretrained Convolutional Neural Networks for Tomato Leaf Disease Detection",
        authors: "I Ahmad, M Hamid, S Yousaf, ST Shah, MO Ahmad",
        venue: "",
        tags: ["deep-learning", "machine-learning"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=wEdc-UUAAAAJ&citation_for_view=wEdc-UUAAAAJ:tKAzc9rXhukC"
    },
    {
        id: 116,
        title: "Missing Link Prediction using Common Neighbor and Centrality based Parameterized Algorithm",
        authors: "I Ahmad, MU Akhtar, S Noor, A Shahnaz",
        venue: "",
        tags: ["machine-learning", "data-science"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=wEdc-UUAAAAJ&citation_for_view=wEdc-UUAAAAJ:JQOojiI6XY0C"
    },
    {
        id: 117,
        title: "A Review of Artificial Intelligence in Water Purification and Wastewater Treatment: Recent Advancements",
        authors: "S Safeera, RP Pandey, B Rehman, T Safdar, I Ahmad, SW Hasan, A Ullah",
        venue: "",
        tags: ["artificial-intelligence", "data-science"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=wEdc-UUAAAAJ&citation_for_view=wEdc-UUAAAAJ:anf4URPfarAC"
    },
    {
        id: 118,
        title: "SEECR: Secure energy efficient and cooperative routing protocol for underwater wireless sensor networks",
        authors: "K Saeed, W Khalil, S Ahmed, I Ahmad, MNK Khattak",
        venue: "",
        tags: ["iot", "cybersecurity"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=wEdc-UUAAAAJ&citation_for_view=wEdc-UUAAAAJ:0izLItjtcgwC"
    },
    {
        id: 119,
        title: "Fire Detection Using Multi Color Space and Background Modeling",
        authors: "A Khalil, SU Rahman, F Alam, I Ahmad, I Khalil",
        venue: "",
        tags: ["machine-learning", "artificial-intelligence"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=wEdc-UUAAAAJ&citation_for_view=wEdc-UUAAAAJ:ZfRJV9d4-WMC"
    },
    {
        id: 120,
        title: "Online algorithms for conversion problems: A survey",
        authors: "E Mohr, I Ahmad, G Schmidt",
        venue: "",
        tags: ["machine-learning", "data-science"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=wEdc-UUAAAAJ&citation_for_view=wEdc-UUAAAAJ:PELIpwtuRlgC"
    },
    {
        id: 121,
        title: "Energy Efficient Indivisible Workload Distribution in Geographically Distributed Data Centers.",
        authors: "MIK Khalil, I Ahmad, AA Almazroi",
        venue: "",
        tags: ["data-science", "machine-learning"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=wEdc-UUAAAAJ&citation_for_view=wEdc-UUAAAAJ:hkOj_22Ku90C"
    },
    {
        id: 122,
        title: "A Generalized Deep Learning Approach to Seismic Activity Prediction",
        authors: "D Muhammad, I Ahmad, MI Khalil, W Khalil, MO Ahmad",
        venue: "",
        tags: ["deep-learning", "machine-learning"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=wEdc-UUAAAAJ&citation_for_view=wEdc-UUAAAAJ:4hFrxpcac9AC"
    },
    {
        id: 123,
        title: "A decade of big data literature: analysis of trends in light of bibliometrics",
        authors: "I Ahmad, G Ahmed, SAA Shah, A Ejaz",
        venue: "",
        tags: ["data-science", "machine-learning"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=wEdc-UUAAAAJ&citation_for_view=wEdc-UUAAAAJ:N5tVd3kTz84C"
    },
    {
        id: 124,
        title: "Optimization-based Workload Distribution in Geographically Distributed Data Centers: A Survey",
        authors: "I Ahmad, MIK Khalil, SAA Shah",
        venue: "",
        tags: ["data-science", "machine-learning"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=wEdc-UUAAAAJ&citation_for_view=wEdc-UUAAAAJ:_Ybze24A_UAC"
    },
    {
        id: 125,
        title: "Energy Cost Minimization for Sustainable Cloud Computing using Option Pricing",
        authors: "MIK Khalil, I Ahmad, SAA Shah, S Jan, FQ Khan",
        venue: "",
        tags: ["data-science", "machine-learning"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=wEdc-UUAAAAJ&citation_for_view=wEdc-UUAAAAJ:kzcrU_BdoSEC"
    },
    {
        id: 126,
        title: "An Explainable Deep Learning Approach for Stock Market Trend Prediction",
        authors: "D Muhammad, I Ahmed, K Naveed, M Bendechache",
        venue: "",
        tags: ["deep-learning", "explainable-ai", "machine-learning"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=wEdc-UUAAAAJ&citation_for_view=wEdc-UUAAAAJ:2VqYfGB8ITEC"
    },
    {
        id: 127,
        title: "Experimental Evaluation of Clickbait Detection Using Machine Learning Models",
        authors: "I Ahmad, MA Alqarni, AA Almazroi, A Tariq",
        venue: "",
        tags: ["machine-learning", "artificial-intelligence"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=wEdc-UUAAAAJ&citation_for_view=wEdc-UUAAAAJ:evX43VCCuoAC"
    },
    {
        id: 128,
        title: "An effective security assessment approach for Internet banking services via deep analysis of multimedia data",
        authors: "S Khattak, S Jan, I Ahmad, Z Wadud, FQ Khan",
        venue: "",
        tags: ["cybersecurity", "deep-learning"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=wEdc-UUAAAAJ&citation_for_view=wEdc-UUAAAAJ:7T2F9Uy0os0C"
    },
    {
        id: 129,
        title: "Using algorithmic trading to analyze short term profitability of Bitcoin",
        authors: "I Ahmad, MO Ahmad, MA Alqarni, AA Almazroi, MIK Khalil",
        venue: "",
        tags: ["machine-learning", "data-science"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=wEdc-UUAAAAJ&citation_for_view=wEdc-UUAAAAJ:35r97b3x0nAC"
    },
    {
        id: 130,
        title: "Randomized Explainable Machine Learning Models for Efficient Medical Diagnosis",
        authors: "D Muhammad, I Ahmed, MO Ahmad, M Bendechache",
        venue: "",
        tags: ["machine-learning", "explainable-ai", "healthcare"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=wEdc-UUAAAAJ&citation_for_view=wEdc-UUAAAAJ:WJVC3Jt7v1AC"
    },
    {
        id: 131,
        title: "An Empirical Investigation on Business Analytics in Software and Systems Development Projects",
        authors: "MO Ahmad, I Ahmad, NP Rana, IS Khan",
        venue: "",
        tags: ["data-science", "machine-learning"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=wEdc-UUAAAAJ&citation_for_view=wEdc-UUAAAAJ:LO7wyVUgiFcC"
    },
    {
        id: 132,
        title: "Transforming healthcare through just, equitable and quality driven artificial intelligence solutions in South Asia",
        authors: "S Adhikari, I Ahmed, D Bajracharya, B Khanal, C Solomon, K Jayaratne, ...",
        venue: "",
        tags: ["artificial-intelligence", "healthcare", "responsible-ai"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=wEdc-UUAAAAJ&citation_for_view=wEdc-UUAAAAJ:mlAyqtXpCwEC"
    },
    {
        id: 133,
        title: "A Framework for Systematic Classification of Assets for Security Testing",
        authors: "S Jan, OB Tauqeer, FQ Khan, G Tsaramirsis, A Ahmad, I Ahmad, ...",
        venue: "",
        tags: ["cybersecurity", "artificial-intelligence"],
        scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=wEdc-UUAAAAJ&citation_for_view=wEdc-UUAAAAJ:2KloaMYe4IUC"
    }
];

// Filter and Search Functionality
let currentFilter = 'all';
let searchQuery = '';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeFilters();
    initializeSearch();
    displayPapers();
});

// Initialize filter buttons
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            // Update current filter
            currentFilter = btn.getAttribute('data-filter');
            displayPapers();
        });
    });
}

// Initialize search
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            displayPapers();
        });
    }
}

// Display papers based on filter and search
function displayPapers() {
    const papersGrid = document.getElementById('papersGrid');
    const noResults = document.getElementById('noResults');
    const paperCount = document.getElementById('paperCount');
    
    if (!papersGrid || !paperCount) {
        console.error('Required elements not found');
        return;
    }
    
    // Filter papers
    let filteredPapers = researchPapers.filter(paper => {
        // Filter by research area
        const matchesFilter = currentFilter === 'all' || paper.tags.includes(currentFilter);
        
        // Filter by search query
        const matchesSearch = searchQuery === '' || 
            paper.title.toLowerCase().includes(searchQuery) ||
            paper.authors.toLowerCase().includes(searchQuery) ||
            paper.venue.toLowerCase().includes(searchQuery) ||
            paper.tags.some(tag => tag.toLowerCase().includes(searchQuery));
        
        return matchesFilter && matchesSearch;
    });
    
    // Update count
    paperCount.textContent = filteredPapers.length;
    
    // Clear grid
    papersGrid.innerHTML = '';
    
    // Show no results message if needed
    if (filteredPapers.length === 0) {
        if (noResults) {
            noResults.style.display = 'block';
        }
        return;
    }
    
    if (noResults) {
        noResults.style.display = 'none';
    }
    
    // Display papers
    filteredPapers.forEach(paper => {
        const paperCard = createPaperCard(paper);
        papersGrid.appendChild(paperCard);
    });
}

// Create paper card element
function createPaperCard(paper) {
    const card = document.createElement('div');
    card.className = 'paper-card';
    
    // Get tag display names
    const tagNames = {
        'machine-learning': 'Machine Learning',
        'artificial-intelligence': 'AI',
        'data-science': 'Data Science',
        'deep-learning': 'Deep Learning',
        'bioinformatics': 'Bioinformatics',
        'cybersecurity': 'Cybersecurity',
        'responsible-ai': 'Responsible AI',
        'explainable-ai': 'Explainable AI',
        'iot': 'IoT',
        'healthcare': 'Healthcare'
    };
    
    const tagsHTML = paper.tags.map(tag => 
        `<span class="paper-tag">${tagNames[tag] || tag}</span>`
    ).join('');
    
    card.innerHTML = `
        <div class="paper-header">
            <h3 class="paper-title">${paper.title}</h3>
            <p class="paper-authors">${paper.authors}</p>
            ${paper.venue ? `<p class="paper-venue">${paper.venue}</p>` : ''}
        </div>
        <div class="paper-tags">
            ${tagsHTML}
        </div>
        <div class="paper-links">
            <a href="${paper.scholarLink}" target="_blank" class="paper-link">
                📚 View on Google Scholar
            </a>
        </div>
    `;
    
    return card;
}

// Navigation is handled by script.js, no need to duplicate here