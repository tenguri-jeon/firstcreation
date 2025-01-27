import { useNavigate } from 'react-router-dom';
import AllianceLayout from '../../../components/franchise/alliance/AllianceLayout';
import { AllianceSupplierContainer3 } from './style';

// 제휴/제안 협력사 신청 및 조회
const AllianceSupplier3 = () => {
    const navigate = useNavigate();

    return (
        <AllianceSupplierContainer3>
            1
            <AllianceLayout ktit={'협력사 신청 및 조회'} />
            <div className="inner">
                <ul className="steps">
                    <li>협력사 제휴·제안 안내</li>
                    <li>등록 및 약관</li>
                    <li className="on">제출 완료</li>
                </ul>

                <section className="txt">
                    <h3>제출이 완료되었습니다</h3>
                    <p>빠른 시일 내에 검토 후 연락드리겠습니다.</p>
                    <button onClick={() => navigate('/franchise/alliance/allianceSupplier')} type="button">
                        돌아가기
                    </button>
                </section>
            </div>
        </AllianceSupplierContainer3>
    );
};

export default AllianceSupplier3;
