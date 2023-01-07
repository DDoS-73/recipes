import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding: 10px 30px;
  border: 1px solid var(--grey-border);
  background-color: #fff;
  font-size: 1.25rem;
  margin-top: 2rem;
  border-radius: 0.5rem;
`;

export const OrangeText = styled.span`
  color: var(--main-orange-color);
`;

export const ErrorText = styled.p`
  color: red;
  margin-bottom: -1.5rem;
`;

export const FilledButton = styled.button<{
  borderRadius: string;
  backgroundColor: string;
  width: string;
}>`
  width: ${(props) => props.width};
  background-color: ${(props) => (props.backgroundColor === 'green' ? `#088149` : '#FF612F')};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => `1px solid ${props.backgroundColor}`};
  margin: 20px 0;
  padding: 10px;
  color: white;
  font-size: 1.25rem;
`;

export const OutlineButton = styled.button<{ borderRadius: string; width: string }>`
  width: ${(props) => props.width};
  color: ${(props) => (props.color === 'green' ? `#088149` : '#FF612F')};
  border: ${(props) => `1px solid ${props.color}`};
  border-radius: ${(props) => props.borderRadius};
  margin: 20px 0;
  padding: 10px;
  background-color: white;
  font-size: 1.25rem;
`;
