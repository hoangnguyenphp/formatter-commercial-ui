export const topicLinks = {
  'discovery': 	(topic_code) => ({
	    to_value: `/topic/${topic_code}/discovery`,
		to_pattern: '/topic/:topic_code/discovery',
	    title: 'Discovery',
   }),
   'joking': (topic_code) => ({
       to_value: `/topic/${topic_code}/joking`,
   	   to_pattern: '/topic/:topic_code/joking',
       title: 'Joking',
    }),
  /*
	  'historyPart': (partId) => ({
	    to: `/history-of-america/part-${partId}`,
	    title: `History of America - Part ${partId}`,
	  }),
	  
	  'home': {
	    to: '/',
	    title: 'Home Page',
	  },
  
  
	  import { Link } from 'react-router-dom';
	  import { articleLinks } from '../../../data/articleLinks';
	
	  // With parameterized link
	  const partId = '02';
	  const { to, title } = articleLinks.historyPart(partId);
	
	  <Link to={to} title={title}>
	    {title}
	  </Link>
	
	  // Static link
	  const homeLink = articleLinks.home;
	
	  <Link to={homeLink.to} title={homeLink.title}>
	    {homeLink.title}
	  </Link>
   */
  // add more as needed
};