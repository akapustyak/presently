import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: 15%;
`;

const StyledCard = styled.div`
  max-width: 600px;
  padding: 1.5rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  border-radius: 8px;
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Text = styled.p`
  text-align: left;
  font-size: 1rem;
`;

const List = styled.ul`
  text-align: left;
  padding-left: 1.5rem;
`;

const OrderedList = styled.ol`
  text-align: left;
  padding-left: 1.5rem;
`;

const CenteredText = styled.p`
  text-align: center;
`;

const PresentlyDescription: React.FC = () => {
  return (
    <Container>
      <StyledCard>
        <Title>
          <strong>Presently</strong> – платформа для втілення ваших бажань і створення незабутніх подарунків!
        </Title>
        <Text>
          Проблема вибору подарунка вже не буде головним болем завдяки <strong>Presently</strong>. Наша платформа дозволяє кожному користувачу створити особистий профіль, де можна публікувати власні «бажання» – список речей, які ви хотіли б отримати на свято. Друзі та рідні зможуть знайти ваш профіль, переглянути список ваших побажань і навіть забронювати те, що вони планують подарувати.
        </Text>
        <Text>
          <strong>Зручності, які пропонує Presently:</strong>
        </Text>
        <List>
          <li>Індивідуальний профіль: створіть список своїх бажань, додавайте до них опис, фото та посилання на ресурси для покупок.</li>
          <li>Анонімність сюрпризу: ніхто не дізнається, хто саме обрав ваш подарунок, зберігаючи елемент несподіванки.</li>
          <li>Зручний пошук: знайдіть профіль друга чи родича та оберіть подарунок, який принесе справжнє задоволення.</li>
          <li>Уникнення повторів: коли хтось «забирає» побажання, воно позначається як заброньоване, і таким чином ніхто інший не подарує його вдруге.</li>
        </List>
        <Text>
          <strong>Як це працює?</strong>
        </Text>
        <OrderedList>
          <li>Створіть профіль та додайте свої побажання.</li>
          <li>Переглядайте побажання друзів або родичів.</li>
          <li>Обирайте і бронюйте подарунки, щоб ніхто інший не обрав те саме.</li>
          <li>Зберігайте елемент сюрпризу: особа, якій призначений подарунок, ніколи не знатиме наперед, хто саме його підготував.</li>
        </OrderedList>
        <CenteredText>
          З <strong>Presently</strong> ваші подарунки завжди будуть влучними та приємно несподіваними!
        </CenteredText>
      </StyledCard>
    </Container>
  );
};

export default PresentlyDescription;
