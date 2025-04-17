
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse/*, theme*/ } from 'antd';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const getItems = (panelStyle) => [
  {
	key: '1',
	label: 'Как принять участие в турнире?',
	children: <p>ывыва</p>,
	style: panelStyle,
  },
  {
	key: '2',
	label: 'Как организовать турнир?',
	children: <p>вава</p>,
	style: panelStyle,
  },
  {
	key: '3',
	label: 'Сколько это стоит?',
	children: <p>{text}</p>,
	style: panelStyle,
  },
];

export default function Coll() {
	// const { token } = theme.useToken();
	const panelStyle = {
	  marginBottom: 30,
	  background: "url('src/images/bg_card.jpg')",
	  borderRadius: "20px",
	  border: 'none',
	//   minHeight: "3rem",
	  alignItems: "center",
	//   color: "white !important",
	  color: "white", 
  fontSize: "1.75rem", // Размер текста
	};

	return (
	  <Collapse
		bordered={false}
		// defaultActiveKey={['1']} //открывает первую панель по умолчанию
		expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
		style={{
		  background: "#141414",
		}}
		items={getItems(panelStyle)}
	  />
	);
  };