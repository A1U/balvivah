 import React from 'react';

import { useState, useRef, useEffect } from 'react';
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa';
import aanandi from './assets/images/aanandi.png';

function BalVivahChatbot() {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hello! I am your Child Marriage Prevention Assistant. How can I help you today?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  // Knowledge base for child marriage prevention
const knowledgeBase = {
  greetings: {
    keywords: ['hello', 'hi', 'hey', 'start', 'help'],
    response: 'Hello! I am here to help you with information about child marriage prevention. You can ask me about:\n• What is child marriage?\n• Legal age for marriage\n• How to report child marriage\n• Effects of child marriage\n• Support services'
  },
  whatIsChildMarriage: {
    keywords: ['what is child marriage', 'define child marriage', 'child marriage meaning', 'what child marriage', 'meaning of child marriage'],
    response: 'A marriage of a boy who is under 21 years and/or the girl who is under 18 years.'
  },
  legalAgeBoy: {
    keywords: ['legal age boy', 'marriage age boy', 'age for boy', 'boy marriage age', 'minimum age boy', 'age limit boy', 'boy age', 'male age'],
    response: '21 years'
  },
  legalAgeGirl: {
    keywords: ['legal age girl', 'marriage age girl', 'age for girl', 'girl marriage age', 'minimum age girl', 'age limit girl', 'girl age', 'female age'],
    response: '18 years'
  },
  legalAgeGeneral: {
    keywords: ['legal age for marriage', 'legal age marriage', 'marriage age', 'minimum age marriage', 'age for marriage', 'what is legal age', 'legal age'],
    response: 'The legal age for marriage in India is:\n• For boys: 21 years\n• For girls: 18 years\n\nAny marriage below these ages is considered child marriage and is prohibited under the Prohibition of Child Marriage Act, 2006.'
  },
  illegal: {
    keywords: ['child marriage illegal', 'is it illegal', 'is child marriage illegal', 'illegal', 'against law'],
    response: 'Child marriage is valid, but it is voidable at the option of the contracting party (boy or girl) who was a child at the time of marriage. Child marriages conducted under certain circumstances can be void. Please see Section 12 and 14 of PCMA, 2006. Solemnizing or permitting or promoting child marriage is illegal and a punishable offence.'
  },
  law: {
    keywords: ['which law', 'prohibits child marriage', 'law in india', 'what law'],
    response: 'Prohibition of Child Marriage Act, 2006 is the primary law that prohibits child marriages in India and provides for punishment for the person/s who perform/conduct/direct or abet child marriage. Giving a child in marriage is also regarded as cruelty and punishable as an offence against children as per Juvenile Justice Act and related Rules.'
  },
  cmpo: {
    keywords: ['who is cmpo', 'cmpo rajasthan', 'child marriage prohibition officer', 'what is cmpo', 'cmpo functions', 'cmpo duties', 'cmpo help', 'cmpo officer', 'who is cmpo'],
    response: 'There are eight kinds of government officers in a district who are declared as Child Marriage Prohibition Officer. They include- District level officers (Assistant/Deputy Director) of Directorate of Women Empowerment (WE), Integrated Child Development Services (ICDS), Department for Child Rights, Protection Officer of WE and sub-district officials from Social Justice and Empowerment (Social Security Officer), ICDS (Child Development Project Officer), Department of Revenue (Tehsildars) and Department of Personnel (Sub-Divisional Magistrate). More officers are likely to be declared as CMPOs in the state.'
  },
  applicable: {
    keywords: ['pcma applicable', 'particular community', 'religion', 'applies to'],
    response: 'The PCMA, 2006 is applicable to all citizens of India.'
  },
  pledgeOutside: {
    keywords: ['not from rajasthan', 'pledge', 'outside rajasthan', 'other state', 'outside state'],
    response: 'Yes!'
  },
  pledgeRajasthanOutside: {
    keywords: ['from rajasthan staying outside', 'rajasthan outside state', 'rajasthan outside country'],
    response: 'Yes!'
  },
  confidentiality: {
    keywords: ['confidentiality protected', 'report protected', 'anonymous', 'confidential'],
    response: 'Yes!'
  },
  whereReport: {
    keywords: ['where report', 'report incident', 'how to report', 'where should i report', 'where to complain', 'how to complain', 'report child marriage', 'complain child marriage', 'who can report', 'where complain'],
    response: 'You may call any one phone number here: 100 or 112 or 1098. You may inform any CMPO of your district. You may approach the Legal Service Authority nearest to you.'
  },
  annulment: {
    keywords: ['file annulment', 'annulment help', 'want to file annulment', 'annulment', 'cancel marriage', 'terminate marriage', 'voidable', 'cancellation', 'annul'],
    response: 'You may contact the nearest CMPO of your district. Please contact Para Legal Volunteer too. You may find them at the nearest Police Station. You may contact nearest Legal Service Authority who are present in every Block (Taluk) and District. It provides free legal aid. Contact them at 9928900900 / 15100. For more details on legal Service please visit https://rajasthan.nalsa.gov.in'
  },
  compensation: {
    keywords: ['victim compensation', 'compensation scheme', 'compensation help'],
    response: 'You may contact nearest Legal Service Authority who are present in every Block (Taluk) and District. Contact them at 9928900900 / 15100. For more details on legal Service please visit https://rajasthan.nalsa.gov.in'
  },
  evidence: {
    keywords: ['provide evidence', 'need evidence', 'proof', 'should i provide evidence'],
    response: 'Not necessarily. However, your input and support in providing evidence to police or CMPO would be helpful to stop the child marriage.'
  },
  injunction: {
    keywords: ['what is injunction', 'who issues injunction', 'injunction'],
    response: 'Injunction is issued under Section 13 of PCMA, 2006 from a Judicial Magistrate of the First Class or a Metropolitan Magistrate to prohibit a planned/impending child marriage. The magistrate can issue an Injunction Suo moto or being approached by CMPO or any other person. CMPOs in Rajasthan are directed to seek mandatory injunction in every suspicious and confirmed cases of child marriage. See Circular from Department for Child Rights dated 22nd December 2025. Marriage solemnised in contravention of an Injunction order, whether interim or final is considered Void ab initio.'
  },
  cmpoRehabilitation: {
    keywords: ['cmpo rehabilitation', 'protection rehabilitation', 'help victim', 'cmpo help victim'],
    response: 'Please Child Welfare Committee and Legal Service Authority of your Block/District.'
  },
  cmpoEvidence: {
    keywords: ['cmpo evidence', 'evidence collection', 'prosecution', 'cmpo prosecution'],
    response: 'Police. You may also contact the Legal Service Authority of your Block/District.'
  },
  cmpoPrevention: {
    keywords: ['cmpo prevention', 'prevent marriage', 'impending marriage', 'cmpo prevent'],
    response: 'Police for supporting you and providing protection. The Please Child Welfare Committee of your district. The Judicial Magistrate of the First Class or a Metropolitan Magistrate can support you issuing injunction (interim or final).'
  },
  unsureAge: {
    keywords: ['not sure age', 'appears underage', 'looks young', 'unsure of age'],
    response: 'Yes! What if both/one of them later found to be a child? Reporting can help protect a child. If it comes out to be a valid marriage, no action would be taken against you or anyone else.'
  },
  helpCampaign: {
    keywords: ['help campaign', 'help government', 'active citizenship', 'help drive'],
    response: 'That is called active citizenship and we appreciate your thought. Please spread awareness by yourself/or in group, on the ill effects of child marriage in your village/community/colony/school/college/office and neighbourhood. You may help people take pledge against child marriage. You can report an impending/solemnised child marriage to 100/112/1098 or to the nearest CMPO. You may join CMPOs/Government functionaries or NGOs who are spreading awareness on child marriage issue.'
  },
  effects: {
    keywords: ['effects', 'consequences', 'impact', 'problems', 'harm', 'danger'],
    response: 'Child marriage has severe consequences:\n\n📚 Education: Girls drop out of school\n🏥 Health: Risk of early pregnancy, maternal mortality\n💭 Mental Health: Depression, anxiety, trauma\n💰 Economic: Poverty cycle continues\n⚖️ Rights: Violation of fundamental rights\n👥 Social: Domestic violence, isolation\n\nPreventing child marriage protects children\'s future and rights.'
  },
  signs: {
    keywords: ['signs', 'identify', 'how to know', 'symptoms', 'indicators'],
    response: 'Warning signs of possible child marriage:\n\n⚠️ Child withdrawn from school suddenly\n⚠️ Family preparing for marriage ceremony\n⚠️ Child appears distressed or fearful\n⚠️ Family discussing marriage arrangements\n⚠️ Child being kept at home\n⚠️ Unusual family gatherings\n\nIf you notice these signs, please report immediately to authorities.'
  },
  emergency: {
    keywords: ['emergency', 'urgent', 'happening now', 'today', 'immediate', 'emergency helpline', 'helpline numbers', 'helpline', 'emergency numbers', 'phone numbers', 'contact numbers', 'help numbers', '1098', '100', '112'],
    response: '🚨 IMMEDIATE ACTION NEEDED!\n\nIf a child marriage is happening right now:\n\n1. Call 100 (Police) immediately\n2. Call 1098 (Childline)\n3. Call 112\n\nDo not delay! Every minute counts in protecting a child\'s future.'
  },
  helplineNumbers: {
    keywords: ['helpline numbers', 'emergency helpline numbers', 'phone numbers', 'contact numbers', 'help numbers', 'emergency numbers', 'report numbers', 'complain numbers'],
    response: 'Emergency Helpline Numbers:\n\n📞 100 - Police Emergency\n📞 1098 - Childline (24/7)\n📞 112 - Emergency Services\n\nFor legal aid:\n📞 9928900900 / 15100 - Legal Service Authority\n\nYou can also contact:\n• Nearest CMPO (Child Marriage Prohibition Officer)\n• Child Welfare Committee\n• District Magistrate'
  }
};
  const quickQuestions = [
    'What is child marriage?',
    'Legal age for marriage',
    'How to report child marriage?',
    'Is child marriage illegal?',
    'Who is CMPO?',
    'Emergency helpline numbers'
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Improved AI-like matching function with scoring system
  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase().trim();
    
    // Score-based matching for better AI-like responses
    let bestMatch = null;
    let bestScore = 0;
    
    for (const [key, data] of Object.entries(knowledgeBase)) {
      let score = 0;
      
      // Check for exact keyword matches
      for (const keyword of data.keywords) {
        const keywordLower = keyword.toLowerCase();
        if (lowerMessage.includes(keywordLower)) {
          score += 10; // High score for exact keyword match
        }
        
        // Check for partial word matches
        const keywordWords = keywordLower.split(' ');
        keywordWords.forEach(word => {
          if (word.length > 3 && lowerMessage.includes(word)) {
            score += 3;
          }
        });
      }
      
      // Special pattern matching for better accuracy
      if (key === 'whatIsChildMarriage') {
        if ((lowerMessage.includes('what') || lowerMessage.includes('define') || lowerMessage.includes('meaning')) && 
            (lowerMessage.includes('child marriage') || lowerMessage.includes('child marriage'))) {
          score += 20;
        }
      }
      
      if (key === 'legalAgeBoy') {
        if ((lowerMessage.includes('boy') || lowerMessage.includes('male') || lowerMessage.includes('groom')) && 
            (lowerMessage.includes('age') || lowerMessage.includes('legal') || lowerMessage.includes('minimum'))) {
          score += 20;
        }
      }
      
      if (key === 'legalAgeGirl') {
        if ((lowerMessage.includes('girl') || lowerMessage.includes('female') || lowerMessage.includes('bride')) && 
            (lowerMessage.includes('age') || lowerMessage.includes('legal') || lowerMessage.includes('minimum'))) {
          score += 20;
        }
      }
      
      if (key === 'whereReport') {
        if ((lowerMessage.includes('report') || lowerMessage.includes('complain') || lowerMessage.includes('inform') || lowerMessage.includes('tell')) && 
            (lowerMessage.includes('where') || lowerMessage.includes('how') || lowerMessage.includes('who'))) {
          score += 18;
        }
      }
      
      if (key === 'legalAgeGeneral') {
        if ((lowerMessage.includes('legal age') || lowerMessage.includes('marriage age') || lowerMessage.includes('minimum age')) && 
            !lowerMessage.includes('boy') && !lowerMessage.includes('girl') && !lowerMessage.includes('male') && !lowerMessage.includes('female')) {
          score += 18;
        }
      }
      
      if (key === 'helplineNumbers') {
        if (lowerMessage.includes('helpline') || lowerMessage.includes('phone number') || lowerMessage.includes('contact number') || 
            lowerMessage.includes('emergency number') || lowerMessage.includes('1098') || lowerMessage.includes('100') || lowerMessage.includes('112')) {
          score += 15;
        }
      }
      
      if (key === 'annulment') {
        if (lowerMessage.includes('annulment') || lowerMessage.includes('cancel') || lowerMessage.includes('terminate') || 
            lowerMessage.includes('voidable') || lowerMessage.includes('cancellation')) {
          score += 15;
        }
      }
      
      if (key === 'cmpo') {
        if (lowerMessage.includes('cmpo') || lowerMessage.includes('prohibition officer') || 
            (lowerMessage.includes('child marriage') && lowerMessage.includes('officer'))) {
          score += 15;
        }
      }
      
      if (key === 'injunction') {
        if (lowerMessage.includes('injunction') || (lowerMessage.includes('stop') && lowerMessage.includes('marriage'))) {
          score += 15;
        }
      }
      
      if (key === 'illegal') {
        if ((lowerMessage.includes('illegal') || lowerMessage.includes('legal') || lowerMessage.includes('valid') || lowerMessage.includes('voidable')) && 
            lowerMessage.includes('child marriage')) {
          score += 15;
        }
      }
      
      if (key === 'law') {
        if ((lowerMessage.includes('law') || lowerMessage.includes('act') || lowerMessage.includes('legal')) && 
            (lowerMessage.includes('child marriage') || lowerMessage.includes('prohibit'))) {
          score += 15;
        }
      }
      
      if (score > bestScore) {
        bestScore = score;
        bestMatch = data;
      }
    }
    
    // Return best match if score is high enough
    if (bestMatch && bestScore >= 5) {
      return bestMatch.response;
    }
    
    // Fallback: Check for greetings
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey') || 
        lowerMessage === 'hii' || lowerMessage === 'hiii') {
      return knowledgeBase.greetings.response;
    }
    
    // Check for thanks
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return 'You\'re welcome! I\'m here to help. If you have any more questions about child marriage prevention, feel free to ask. Remember, you can call 1098 for immediate assistance.';
    }
    
    // Default response with helpful suggestions
    return 'I understand you have a question about child marriage prevention. Here are some topics I can help with:\n\n• What is child marriage?\n• Legal age for marriage (boy/girl)\n• How to report child marriage\n• Is child marriage illegal?\n• Effects and consequences\n• Laws and punishments\n• CMPO information\n• Annulment procedures\n• Injunction orders\n• Warning signs\n• Support services\n\nPlease ask me about any of these topics, or call 1098 for immediate assistance.';
  };

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = {
      type: 'user',
      text: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate bot typing and response
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        text: getBotResponse(input),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickQuestion = (question) => {
    if (!question.trim()) return;
    
    // Add user message
    const userMessage = {
      type: 'user',
      text: question,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate bot typing and response
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        text: getBotResponse(question),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
   
      <div className="chatbot-container">
        {!isOpen ? (
          <button className="chatbot-button" onClick={() => setIsOpen(true)}>
            <img
              src={aanandi}
              alt="Chatbot"
              style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover' }}
            />
            <span className="chatbot-badge">1</span>
          </button>
        ) : (
          <div className="chatbot-window">
            <div className="chatbot-header">
              <div className="chatbot-header-content">
                <div className="chatbot-avatar">
                  <img
                    src={aanandi}
                    alt="Chatbot"
                    style={{ width: 45, height: 45, borderRadius: '50%', objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <h3>Child Marriage Prevention</h3>
                  <div className="chatbot-status">
                    <span className="status-dot"></span>
                    <span>Online</span>
                  </div>
                </div>
              </div>
              <button className="close-button" onClick={() => setIsOpen(false)}>
                <FaTimes size={14} />
              </button>
            </div>

            <div className="chatbot-messages">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.type}`}>
                  {message.type === 'bot' && (
                    <div className="message-avatar">
                      <img
                        src={aanandi}
                        alt="Chatbot"
                        style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }}
                      />
                    </div>
                  )}
                  <div className="message-wrapper">
                    <div className="message-content">{message.text}</div>
                    <div className="message-time">{message.time}</div>
                  </div>
                  {message.type === 'user' && (
                    <div className="message-avatar user-avatar">
                      <FaComments size={12} />
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="message bot">
                  <div className="message-avatar">
                    <img
                      src={aanandi}
                      alt="Chatbot"
                      style={{ width: 18, height: 18, borderRadius: '50%', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="typing-indicator">
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="quick-questions">
              <div className="quick-questions-label">Quick Questions:</div>
              <div className="quick-questions-list">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    className="quick-question-btn"
                    onClick={() => handleQuickQuestion(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            <div className="chatbot-input">
              <input
                type="text"
                placeholder="Type your question here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button 
                className="send-button" 
                onClick={handleSend}
                disabled={!input.trim()}
                title="Send message"
              >
                <FaPaperPlane size={14} />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default BalVivahChatbot;







