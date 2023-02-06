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

export const OutlineInput = styled.input`
  width: 100%;
  padding: 0 15px;
  border: none;
  border-bottom: 1px solid var(--grey-border);
  background-color: #fff;
  font-size: 1.25rem;
  margin-top: 2rem;
`;

export const Select = styled.select`
  width: 30%;
  padding: 10px 30px;
  border: 1px solid var(--grey-border);
  background-color: #fff;
  font-size: 1.25rem;
  margin-top: 2rem;
  border-radius: 0.5rem;
`;

export const OutlineSelect = styled.select<{ color: string }>`
  width: 20%;
  padding: 0 15px;
  border: none;
  border-bottom: ${(props) => `1px solid ${props.color}`};
  color: ${(props) => props.color};
  background-color: #fff;
  font-size: 1rem;
  margin-top: 2rem;
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
  padding?: string;
  margin?: string;
}>`
  width: ${(props) => props.width};
  background-color: ${(props) => (props.backgroundColor === 'green' ? `#088149` : '#FF612F')};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => `1px solid ${props.backgroundColor}`};
  margin: ${(props) => (props.margin ? props.margin : '1.75rem 0')};
  padding: ${(props) => (props.padding ? props.padding : '10px')};
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
`;

export const OutlineButton = styled.button<{
  borderRadius: string;
  width: string;
  padding?: string;
  margin?: string;
}>`
  width: ${(props) => props.width};
  color: ${(props) => (props.color === 'green' ? `#088149` : '#FF612F')};
  border: ${(props) => `1px solid ${props.color}`};
  border-radius: ${(props) => props.borderRadius};
  margin: ${(props) => (props.margin ? props.margin : '1.75rem 0')};
  padding: ${(props) => (props.padding ? props.padding : '10px')};
  background-color: white;
  font-size: 1.25rem;
  font-weight: 700;
`;

export const FormItem = styled.div`
  border-radius: 1rem;
  background-color: white;
  padding: 20px 45px;
  margin-bottom: 2rem;
`;

export const ButtonContainer = styled.div`
  min-height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;
