/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/*
 * PFXApiResponse.h
 *
 * Describes the result of uploading an image resource
 */

#ifndef PFXApiResponse_H
#define PFXApiResponse_H

#include <QJsonObject>

#include <QString>

#include "PFXEnum.h"
#include "PFXObject.h"

namespace test_namespace {

class PFXApiResponse : public PFXObject {
public:
    PFXApiResponse();
    PFXApiResponse(QString json);
    ~PFXApiResponse() override;

    QString asJson() const override;
    QJsonObject asJsonObject() const override;
    void fromJsonObject(QJsonObject json) override;
    void fromJson(QString jsonString) override;

    qint32 getCode() const;
    void setCode(const qint32 &code);

    QString getType() const;
    void setType(const QString &type);

    QString getMessage() const;
    void setMessage(const QString &message);

    virtual bool isSet() const override;
    virtual bool isValid() const override;

private:
    void initializeModel();

    qint32 code;
    bool m_code_isSet;
    bool m_code_isValid;

    QString type;
    bool m_type_isSet;
    bool m_type_isValid;

    QString message;
    bool m_message_isSet;
    bool m_message_isValid;
};

} // namespace test_namespace

Q_DECLARE_METATYPE(test_namespace::PFXApiResponse)

#endif // PFXApiResponse_H
